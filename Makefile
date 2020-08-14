.PHONY: help build rebuild test service attach package repackage run clean prune

# If you see pwd_unknown showing up, this is why. Re-calibrate your system.
PWD ?= pwd_unknown

# PROJECT_NAME defaults to name of the current directory.
# should not to be changed if you follow GitOps operating procedures.
#PROJECT_NAME = $(notdir $(PWD))
IMAGE_NAME = jgoodson/scholten
IMAGE_TAG = latest
PROJECT_NAME = scholten

# Note. If you change this, you also need to update docker-compose.yml.
# only useful in a setting with multiple services/ makefiles.
SERVICE_TARGET := scholten

THIS_FILE := $(lastword $(MAKEFILE_LIST))
CMD_ARGUMENTS ?= $(cmd)

# export such that its passed to shell functions for Docker to pick up.
export PROJECT_NAME
export IMAGE_NAME
export IMAGE_TAG

check-env:
ifndef REACT_APP_GOOGLE_API
	$(error REACT_APP_GOOGLE_API is undefined)
endif

BUILD_ARGS = --build-arg REACT_APP_GOOGLE_API=$(REACT_APP_GOOGLE_API)

help:
	@echo ''
	@echo 'Usage: make [TARGET] [EXTRA_ARGUMENTS]'
	@echo 'Targets:'
	@echo '  build    	build docker --image-- (development)'
	@echo '  rebuild  	rebuild docker --image-- (development)'
	@echo '  service   	run as service --container-- (development)'
	@echo '  test     	test docker --container--'
	@echo '  attach   	run as service and attach --container--'
	@echo '  package   	build docker --image-- (production)'
	@echo '  repackage 	rebuild docker --image-- (production)'
	@echo '  run		run as service --container-- (production)'
	@echo '  clean		remove docker --image--'
	@echo '  prune    	shortcut for docker system prune -af. Cleanup inactive containers and cache.'
	@echo ''
	@echo 'REACT_APP_GOOGLE_API is a required env variable to supply'
	@echo 'when calling most of the build and run targets.'
	@echo ''

build: check-env
	docker-compose build $(BUILD_ARGS) $(PROJECT_NAME)

rebuild: check-env
	docker-compose build $(BUILD_ARGS) --no-cache $(PROJECT_NAME)

test:
	docker-compose -p $(PROJECT_NAME) run --rm $(PROJECT_NAME) sh -c 'npm test' \
		&& echo "\nSuccess"

service: build
	docker-compose -p $(PROJECT_NAME) up -d $(PROJECT_NAME)

attach: service
	docker exec -it $(PROJECT_NAME) sh

package: check-env
	docker-compose -f docker-compose.prod.yml build $(BUILD_ARGS) $(PROJECT_NAME)

repackage: check-env
	docker-compose -f docker-compose.prod.yml build $(BUILD_ARGS) --no-cache $(PROJECT_NAME)

run: package
	docker-compose -f docker-compose.prod.yml -p $(PROJECT_NAME) up -d $(PROJECT_NAME)

attach-nginx: run
	docker exec -it $(PROJECT_NAME) sh

validate:
	docker run --rm -t -a stdout -v ${PWD}/nginx.conf:/etc/nginx/nginx.conf:ro -v ${PWD}/default.conf:/etc/nginx/conf.d/default.conf:ro -v ${PWD}/keys:/etc/letsencrypt/live/yardsign.scholten4iowa.com/:ro  --entrypoint nginx nginx:stable-alpine -c /etc/nginx/nginx.conf -t

clean:
	@docker-compose -p $(PROJECT_NAME) down --remove-orphans --rmi all 2>/dev/null \
	&& echo 'Image(s) for "$(IMAGE_NAME):$(IMAGE_TAG)" removed.' \
	|| echo 'Image(s) for "$(IMAGE_NAME):$(IMAGE_TAG)" already removed.'

prune:
	docker system prune -af