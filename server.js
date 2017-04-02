// load environment variables
//require('dotenv').config();

// grab our dependencies
const express    = require('express'),
  app            = express(),
  port           = process.env.PORT || 8087,
  expressLayouts = require('express-ejs-layouts'),
  mongoose       = require('mongoose'),
  bodyParser     = require('body-parser'),
  session        = require('express-session'),
  cookieParser   = require('cookie-parser'),
  flash          = require('connect-flash'),
  expressValidator = require('express-validator');

  var MongoClient = require('mongodb').MongoClient;

// configure our application ===================

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// connect to our database
//mongoose.connect(process.env.DB_URI);

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/movies", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('movie');
  

//insertion

 collection.insertOne(  {
    "_id" : MongoClient("58c662e2f140cb477d088888"),
    "fields" : {
        "directors" : [ 
            "Melvin ADJEI"
        ],
        "release_date" : "2013-10-30T00:00:00Z",
        "genres" : [ 
            "Documentary", 
            "Music", 
            "Humor"
        ],
        "image_url" : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAghAAAAJGVlMTExMGZkLTg0ZmQtNDJhZi1hOGQ1LWMwNGM4ZmRhNmQ5Yg.jpg",
        "plot" : "Follow Melvin a young beatmaker through his journy of success",
        "title" : "Melvax the beginning",
        "rank" : 10,
        "year" : 2017,
        "actors" : [ 
            "Melvin ADJEI", 
            "Karim BENMOUSSA", 
            "Haris HAOUASSI"
        ]
    },
    "id" : "newidtt19",
    "type" : "add"
} ) 


collection.insertOne(  {
    "_id" : MongoClient("6gb897bgb8sdfvkjkj"),
    "fields" : {
        "directors" : [ 
            "Karim BENMOUSSA"
        ],
        "release_date" : "2016-10-20T00:00:00Z",
        "genres" : [ 
            "Action",
            "Humor"
        ],
        "image_url" : "https://www.pexels.com/photo/animal-eyes-wolf-view-39310/",
        "plot" : "Are you a wolf?",
        "title" : "The wolf gang part one",
        "rank" : 10,
        "year" : 2017,
        "actors" : [ 
            "Melvin ADJEI", 
            "Karim BENMOUSSA", 
            "Haris HAOUASSI"
        ]
    },
    "id" : "newidtt20",
    "type" : "add"
} )


var match = {"fields.title":"NOM DU FILM RECHERCHE"};
var project = {"fields.title": 1, "fields.plot":1,"fields.year":1,"fields.rating":1};
db.collection.find(match,project);
 /*
var match2 = {"fields.rating":{"$gt:NOTE RENTREE"}};
project = {"fields.title": 1, "fields.plot":1,"fields.year":1,"fields.rating":1};
db.collection.find(match2,project);

var match3 = {"fields.plot" : {$regex: "MOT RENTRE PAR LUTILISATUER", $options : "i"}};
project = {"fields.title": 1, "fields.plot":1,"fields.year":1,"fields.rating":1};
db.collection.find(match3,project);
*/
});



// use body parser to grab info from a form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// set the routes =============================
// route our app
var router = require('./app/routes');
app.use('/', router);


// start our server ===========================
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});