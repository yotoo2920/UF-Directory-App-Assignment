/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema'),
    mongoose = require('mongoose'),
    config = require('./config');

mongoose.connect(config.db.uri);

var mongoosConnection = mongoose.connection;

mongoosConnection.on("connected", function () {
    console.log("It is connected");
    //findLibraryWest();
    removeCable();
    // updatePhelpsLab();
    // retrieveAllListings();
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
    Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
        if (err) throw err;

        // entry removed
        console.log(Listing);
    });
};



var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

// findLibraryWest();
// removeCable();
// updatePhelpsLab();
// retrieveAllListings();
