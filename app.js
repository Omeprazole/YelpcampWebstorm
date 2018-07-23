var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
var Campground  = require("./models/campground");
var Comment = require("./models/comment");
var seedDB      = require("./seeds");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// connect to MongoDB
mongoose.Promise = Promise;
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url, {
    useMongoClient: true,
});

seedDB();

app.get("/", function(req, res){
    res.render("landing");
});

//Index - show all campground to DB
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
});

//Create - add new compground to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//New - show from to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

const PORT = process.env.PORT || 5996;
app.listen(PORT, process.env.IP, function() {
    console.log("Yelp Camp Server started");
});