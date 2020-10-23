const PICKUP_LOCATIONS = [
    {
        "location_id": 1,
        "location_name": "William Baresel",
        "address": "103 N. Main Street",
        "city": "Charles City",
        "state_code": "IA",
        "zip": 50616,
        "hours": "8:00am - 4:00pm",
        "latitude": 43.067027,
        "longitude": -92.678893,
        "phone_number": "(641) 220-6249"
    },
    {
        "location_id": 2,
        "location_name": "Ryan Arndorfer",
        "address": "21 1st Ave NE",
        "city": "Britt",
        "state_code": "IA",
        "zip": 50423,
        "hours": "Evenings",
        "latitude": 43.097302,
        "longitude": -93.799681,
        "phone_number": "(641) 512-5436"
    },
    {
        "location_id": 3,
        "location_name": "Lisa Ralls",
        "address": "506 4th Street NW",
        "city": "Buffalo Center",
        "state_code": "IA",
        "zip": 50424,
        "hours": "7:00pm - 8:00pm",
        "latitude": 43.390836,
        "longitude": -93.950038,
        "phone_number": "(641) 909-4606",
        "instructions": "Please contact first.  Text preferred."
    },
    {
        "location_id": 4,
        "location_name": "Story County Dems",
        "address": "415 Main St",
        "city": "Ames",
        "state_code": "IA",
        "zip": 50010,
        "dates": "Saturday Farmers Market",
        "hours": "8:00am - 12:30pm",
        "latitude": 42.025458,
        "longitude": -93.615978
    },
    {
        "location_id": 5,
        "location_name": "Crawford County Dems",
        "address": "46 N Main St",
        "city": "Denison",
        "state_code": "IA",
        "zip": 51442,
        "dates": "Monday - Friday",
        "hours": "11:00am - 1:00pm, 5:00pm - 7:00pm",
        "latitude": 42.017838,
        "longitude": -95.354287,
        "phone_number": "(712) 269-9474"
    },
    {
        "location_id": 6,
        "location_name": "Shelby County Farmers Market",
        "address": "2099 Chatburn Ave",
        "city": "Harlan",
        "state_code": "IA",
        "zip": 51537,
        "dates": "Saturdays",
        "hours": "8:30am - 12:00pm",
        "latitude": 41.646136,
        "longitude": -95.337029
    },
    {
        "location_id": 7,
        "location_name": "Jim Eliason",
        "address": "202 Russell St",
        "city": "Storm Lake",
        "state_code": "IA",
        "zip": 50588,
        "latitude": 42.638078,
        "longitude": -95.19063,
        "phone_number": "(712) 660-3391"
    },
    {
        "location_id": 8,
        "location_name": "Jerry Depew",
        "address": "16595 450th St",
        "city": "Laurens",
        "state_code": "IA",
        "zip": 50554,
        "hours": "8:00am - 7:00pm",
        "latitude": 42.83685,
        "longitude": -94.783873,
        "phone_number": "(712) 845-4496",
        "instructions": "Please call ahead - may be busy with the harvest"
    },
    {
        "location_id": 9,
        "location_name": "Kim Van Es",
        "address": "1443 Crown Ridge Drive",
        "city": "Sioux Center",
        "state_code": "IA",
        "zip": 51250,
        "latitude": 43.061657,
        "longitude": -96.160388,
        "instructions": "Please contact by email:  kim.vanes1966@gmail.com"
    },
    {
        "location_id": 10,
        "location_name": "Mikki",
        "address": "1232 N 8th St",
        "city": "Estherville",
        "state_code": "IA",
        "zip": 51334,
        "latitude": 43.4132,
        "longitude": -94.831355,
        "instructions": "Pick up signs on side of house and text number posted on sign"
    },
    {
        "location_id": 11,
        "location_name": "Cerro Gordo County Dems",
        "address": "219 N Federal Ave",
        "city": "Mason City",
        "state_code": "IA",
        "zip": 50401,
        "dates": "Wednesdays & Saturdays",
        "hours": "2:00pm - 4:00pm",
        "latitude": 43.15427,
        "longitude": -93.200654
    },
    {
        "location_id": 12,
        "location_name": "Penny Vossler",
        "address": "313 5th St",
        "city": "Boone",
        "state_code": "IA",
        "zip": 50036,
        "hours": "Evenings and Weekends",
        "latitude": 42.061207,
        "longitude": -93.888865,
        "phone_number": "(515) 525-8900",
        "instructions": "Please contact by text or e-mail: penny.vossler@gmail.com"
    },
    {
        "location_id": 13,
        "location_name": "Tom Salvatores",
        "address": "1053 N 23rd Pl",
        "city": "Fort Dodge",
        "state_code": "IA",
        "zip": 50501,
        "latitude": 42.517265,
        "longitude": -94.166194,
        "phone_number": "(515) 570-6010",
        "instructions": "Please text or call ahead"
    },
    {
        "location_id": 14,
        "location_name": "Mark Sturgeon",
        "address": "101 5th St NW",
        "city": "Le Mars",
        "state_code": "IA",
        "zip": 51031,
        "hours": "Hours varied",
        "latitude": 42.799079,
        "longitude": -96.167096,
        "phone_number": "(712) 540-6637",
        "instructions": "Please contact by phone call, text, or email: plymouthcountydems@gmail.com"
    },
    {
        "location_id": 15,
        "location_name": "Beth Schaben",
        "address": "1151 Utah Ave",
        "city": "Dunlap",
        "state_code": "IA",
        "zip": 51529,
        "latitude": 41.854112,
        "longitude": -95.599611,
        "phone_number": "(712) 269-7505",
        "instructions": "Please contact first - text preferred"
    },
    {
        "location_id": 16,
        "location_name": "Catherine Crooks",
        "address": "225 N Akir St",
        "city": "Latimer",
        "state_code": "IA",
        "zip": 50452,
        "hours": "Hours varied",
        "latitude": 42.765238,
        "longitude": -93.368027,
        "phone_number": "(641) 430-6909",
        "instructions": "Please call ahead"
    },
    {
        "location_id": 17,
        "location_name": "Shannon Walker",
        "address": "411 Central Ave E. (Hwy 3)",
        "city": "Clarion",
        "state_code": "IA",
        "latitude": 42.73192,
        "longitude": -93.72808,
        "phone_number": "(515) 851-8487",
        "instructions": "Please text before heading over"
    },
    {
        "location_id": 18,
        "location_name": "Emma Schmit",
        "address": "103 N. 1st Street",
        "city": "Rockwell City",
        "state_code": "IA",
        "latitude": 42.398992,
        "longitude": -94.629695,
        "phone_number": "(712) 830-3748"
    },
    {
        "location_id": 19,
        "location_name": "Kathy Winter",
        "address": "931 5th St NE",
        "city": "Sibley",
        "state_code": "IA",
        "latitude": 43.409041,
        "longitude": -95.741028,
        "phone_number": "(712) 754-2237",
        "instructions": "Please call ahead and leave a message if not picked-up"
    },
    {
        "location_id": 20,
        "location_name": "CJ Peterson",
        "address": "105 1st Ave",
        "city": "Templeton",
        "state_code": "IA",
        "zip": 51463,
        "latitude": 41.919022,
        "longitude": -94.938804,
        "phone_number": "(712) 435-0697",
        "instructions": "Please text or call ahead"
    },
    {
        "location_id": 21,
        "location_name": "Sherry Martin",
        "address": "2315 Summit St",
        "city": "Sioux City",
        "state_code": "IA",
        "dates": "Daily",
        "hours": "9:00am - 9:00pm",
        "latitude": 42.514646,
        "longitude": -96.409785,
        "instructions": "Pick up signs from the front porch"
    },
    {
        "location_id": 22,
        "location_name": "Pat Crosley",
        "address": "200 N. Main",
        "city": "Kimballton",
        "state_code": "IA",
        "zip": 51543,
        "latitude": 41.628929,
        "longitude": -95.072621,
        "phone_number": "(712) 790-6354",
        "instructions": "Please call ahead"
    },
    {
        "location_id": 23,
        "location_name": "Susan Nelson",
        "address": "320 N Main St",
        "city": "Marble Rock",
        "state_code": "IA",
        "hours": "10:00am - 8:00pm",
        "latitude": 42.967704,
        "longitude": -92.867971,
        "phone_number": "(641) 315-2654, (641) 330-4654",
        "instructions": "Please call ahead"
    },
    {
        "location_id": 24,
        "location_name": "Karen Sterk",
        "address": "5177 320th Street",
        "city": "Sheldon",
        "state_code": "IA",
        "latitude": 43.185646,
        "longitude": -95.766146,
        "phone_number": "(712) 348-1906"
    },
    {
        "location_id": 25,
        "location_name": "Elizabeth Gray",
        "address": "3903 Westlawn Dr",
        "city": "Ames",
        "state_code": "IA",
        "zip": 50010,
        "hours": "9am - 7pm",
        "latitude": 42.060275,
        "longitude": -93.641613,
        "instructions": "Yard signs will be out on the front porch, take what you can use and leave your name and number of signs taken on the sheet. Barn sign also available!"
    },
    {
        "location_id": 26,
        "location_name": "Holly Master",
        "address": "911 E Dakota Ave",
        "city": "George",
        "state_code": "IA",
        "zip": 51237,
        "latitude": 43.345415,
        "longitude": -95.987687,
        "phone_number": "(712) 348-4556",
        "instructions": "Pick up signs from the wrap-around porch"
    },
    {
        "location_id": 27,
        "location_name": "Gilbert Flooring",
        "address": "713 Seneca Street",
        "city": "Webster City",
        "state_code": "IA",
        "zip": 50595,
        "hours": "M-F 8am-5pm, Saturdays 8am-1pm",
        "latitude": 42.468837,
        "longitude": -93.817312
    },
    {
        "location_id": 28,
        "location_name": "Jennifer Breister",
        "address": "1720 S Seymour Ave",
        "city": "Garner",
        "state_code": "IA",
        "zip": 50438,
        "hours": "M-F 6pm-9pm, Weekends 7am-7pm",
        "latitude": 43.087422,
        "longitude": -93.599383
    },
    {
        "location_id": 29,
        "location_name": "Amanda Glaser",
        "address": "17 W Gardner St",
        "city": "New Hampton",
        "state_code": "IA",
        "zip": 50659,
        "hours": "9am - 9pm",
        "latitude": 43.064999,
        "longitude": -92.316463,
        "instructions": "Pick up signs from the porch"
    },
    {
        "location_id": 30,
        "location_name": "Brad Dewit",
        "address": "804 Holder Street",
        "city": "Larchwood",
        "state_code": "IA",
        "latitude": 43.452742,
        "longitude": -96.438625,
        "phone_number": "(712) 281-5521",
        "instructions": "Pick up a sign from the side of the garage door"
    },
    {
        "location_id": 31,
        "location_name": "Steve King",
        "address": "1208 E Lucas St",
        "city": "Algona",
        "state_code": "IA",
        "zip": 50511,
        "hours": "9am - 9pm",
        "latitude": 43.071655,
        "longitude": -94.222422
    },
    {
        "location_id": 32,
        "location_name": "Adam Benson",
        "address": "812 Amber Dr",
        "city": "Cherokee",
        "state_code": "IA",
        "zip": 51012,
        "latitude": 42.739497,
        "longitude": -95.544088,
        "phone_number": "(712) 229-3785",
        "instructions": "Please text ahead"
    },
    {
        "location_id": 33,
        "location_name": "Bev Evans",
        "address": "6336 Y Ave",
        "city": "Aurelia",
        "state_code": "IA",
        "latitude": 42.600028,
        "longitude": -95.408968,
        "phone_number": "(712) 229-1198",
        "instructions": "Please call or text ahead"
    },
    {
        "location_id": 34,
        "location_name": "Michele Pirie",
        "address": "601 Garfield",
        "city": "Rolfe",
        "state_code": "IA",
        "latitude": 42.81586,
        "longitude": -94.527594,
        "phone_number": "(515) 302-5013"
    },
    {
        "location_id": 35,
        "location_name": "Dick Gruber",
        "address": "203 2nd Ave NW",
        "city": "Pocahontas",
        "state_code": "IA",
        "latitude": 42.734151,
        "longitude": -94.672212,
        "phone_number": "(712) 450-3249"
    },
    {
        "location_id": 36,
        "location_name": "Kathy Eck",
        "address": "210 4th St S",
        "city": "Dakota City",
        "state_code": "IA",
        "zip": 50529,
        "latitude": 42.718276,
        "longitude": -94.202916,
        "phone_number": "(515) 368-4749 cell\n(515) 332-4749 home\neck@goldfieldaccess.net",
        "instructions": "Please call, text, or email ahead"
    },
    {
        "location_id": 37,
        "location_name": "Randy Mings",
        "address": "1209 5th St",
        "city": "Onawa",
        "state_code": "IA",
        "zip": 51040,
        "hours": "8am - dark",
        "latitude": 42.023524,
        "longitude": -96.089563,
        "phone_number": "(712) 420-0491",
        "instructions": "Pick up a sign from the box by the front door, delivery requests available for elderly or handicapped folks"
    },
    {
        "location_id": 38,
        "location_name": "Allyson Munger",
        "address": "105 Park St",
        "city": "Schaller",
        "state_code": "IA",
        "zip": 51053,
        "hours": "Afternoons",
        "latitude": 42.497077,
        "longitude": -95.292494,
        "phone_number": "(712) 229-5816",
        "instructions": "Barn sign also available!"
    },
    {
        "location_name": "Tonya Ramsey",
        "address": "2924 Rolf Ave",
        "city": "Sac City",
        "state_code": "IA",
        "zip": 50583,
        "phone_number": "(712) 797-0117",
        "instructions": "Text ahead, willing to leave signs at the end of the driveway"
    }
];

export default PICKUP_LOCATIONS;
