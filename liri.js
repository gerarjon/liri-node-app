// Read and set environment variables with .env package
require("dotenv").config();

// Require data from File System npm package
var fs = require("fs");

// // Requiring spotify function from spotify.js
var getSpotify = require("./spotify.js");
// // Requiring movie function from movies.js
var getMovie = require("./movies.js");
// Requiring bands function from bands.js
var getConcert = require("./bands.js");

// Obtain first input to determine the command
var input1 = process.argv[2];
// Obtain the second input that follows the command
var input2 = process.argv.splice(3,process.argv.length).join(" ");


switch (input1) {
    // If the user inputs 'help'
    case "help" :
        console.log("Please choose one of these commands:");
        console.log(`'concert-this': to search for upcoming concerts by an artist`);
        console.log(`'spotify-this': to search for a song`);
        console.log(`'movie-this': to seach for a movie`);
        console.log(`'do-what-it-says': to use a random command`);
        break;
    case "concert-this" :
        getConcert(input2);
        break;
    case "spotify-this" :
        getSpotify(input2);
        break;
    case "movie-this" :
        getMovie(input2);
        break;
    case "do-what-it-says" :
        doWhatItSays();
        break;
    default: 
        console.log("LIRI does not recognize that command.\n" + "Please type 'node liri.js help' to see the commands");
        break;
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error,data) {
        // Return error if error
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        // Removes the quotes within the random.txt format
        if (dataArr[0] === "spotify-this") {
            var songCheck = dataArr[1].slice(1, -1);
            console.log(`Song check: ${songCheck}`);
            getSpotify(songCheck);
        } 
        else if (dataArr[0] === "movie-this") {
            var movieCheck = dataArr[1].slice(1,-1);
            console.log(`Movie check: ${movieCheck}`);
            getMovie(movieCheck);
        }
        else if (dataArr[0] === "concert-this") {
            var concertCheck = dataArr[1].slice(1,-1);
            console.log(`Concert check: ${concertCheck}`);
            getConcert(concertCheck);
        }
    });
};