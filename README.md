# YelpcampWebstorm
Version 1

	Set up environment: node.js, express

	Initial Route: get, post

	Layout and styling: landing page, campground page, new page

	Photo source: https://www.photosforclass.com/search/camping

	body-parser for parsing middleware

	Local host: http://127.0.0.1:5996/


Version 2

    Install MongoDB, start it by command mongod

    Using Mongoose to store data in MongoDB

    Create, New, Show campgrounds


Version 3

    REST - a mapping between HTTP routes and CRUD(Create Read Update Destroy)

    Add comments part

    Add seeds file

    RESTFUL ROUTES

    name      url      verb    desc.
    ===============================================
    INDEX   /dogs      GET   Display a list of all dogs
    NEW     /dogs/new  GET   Displays form to make a new dog
    CREATE  /dogs      POST  Add new dog to DB
    SHOW    /dogs/:id  GET   Shows info about one dog

    INDEX   /campgrounds
    NEW     /campgrounds/new
    CREATE  /campgrounds
    SHOW    /campgrounds/:id

    NEW     campgrounds/:id/comments/new    GET
    CREATE  campgrounds/:id/comments      POST

Version 4

    Add Comment routes

Version 5

   Add stylesheet

Version 6

    Authorization

    Add login/logout/Register routes

Version 7

    Refactoring routes

Version 8

    Associate users and comments

    Save author's name to a comment automatically

Version 9

    Prevent an unauthenticated user from creating a campground

    Save username+id to newly created campground

Version 10

    Add edit and delete features with authorization

    Refactor middleware















