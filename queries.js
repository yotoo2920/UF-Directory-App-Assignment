/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema'),
    mongoose = require('mongoose'),
    config = require('./config');

mongoose.connect(config.db.uri);

var mongoosConnection = mongoose.connection;

mongoosConnection.on("connected", function () {
    console.log("It is connected");
    //findLibraryWest();
    //removeCable();
    //updatePhelpsLab();
    retrieveAllListings();
});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.find({ name: 'Library West' }, function(err, name) {
        if (err) throw err;

        // object of the user
        console.log(name);
    });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({ code: 'CABL' }, function(err, doc) {
        if (err) throw err;

        // entry removed
        console.log(doc);
    });
};



var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    var updateAddress = 'Miami, FL 33104';

    Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: updateAddress }, function(err, phelpsDoc) {
        if(err) throw err;

        // log the updated document to the console
        phelpsDoc.address = updateAddress;
        console.log(phelpsDoc);
    });
};

var retrieveAllListings = function() {
    Listing.find({}, function(err, listings){
        if(err) throw err;

        console.log(listings);
    });
};
