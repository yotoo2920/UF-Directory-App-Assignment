'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listingData = [];

/* Connect to your database */
mongoose.connect(config.db.uri);


var mongoosConnection = mongoose.connection;

mongoosConnection.on("connected", function () {
    console.log("It is connected");
    readFile();

});

var readFile = function () {

    fs.readFile('listings.json', 'utf8', function(err, data) {
        /*
          This callback function should save the data in the listingData variable,
          then start the server.
         */
        if (err) throw err;

        listingData = JSON.parse(data);
        writeJSONMongo();
    });

};

var writeJSONMongo = function () {

    Listing.remove({}, function (err) {
        if (err) throw err;

        var entriesArray = listingData["entries"];

        for (var x in entriesArray) {
            var tempEntry = entriesArray[x];

            var toBeSendToMongo = new Listing(tempEntry);

            toBeSendToMongo.save(function (err) {
                if (err) {
                    throw err;
                }
                console.log("entry uploaded");
            })

        }
    })

}





/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */