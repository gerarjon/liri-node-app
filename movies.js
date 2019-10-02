var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");

function getMovie(input2) {
    var movie = input2;
    // if a movie wasn't picked, pick Shrek
    if (!movie) {
        console.log("Since a movie wasn't picked,\n" + "the selected movie is 'Shrek'")
        movie = "shrek";
    }
    var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey="+keys.omdb.id;


    axios.get(url)
        .then(function(response) {
            console.log("--------------------------")
            console.log("Movie Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("--------------------------")
            //adds text to log.txt
            fs.appendFileSync('log.txt', "\r\n" + "Movie Search Log----------------------" + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Year: " + response.data.Year + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "IMDB Rating: " + response.data.imdbRating + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Rotten Tomatoes: " + response.data.Ratings[1].Value + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "Country: " + response.data.Country + "\r\n", 'utf8');                
            fs.appendFileSync('log.txt', "\r\n" + "Language: " + response.data.Language + "\r\n", 'utf8');                
            fs.appendFileSync('log.txt', "\r\n" + "Plot: " + response.data.Plot + "\r\n", 'utf8');                fs.appendFileSync('log.txt', "\r\n" + "Year: " + response.data.Year + "\r\n", 'utf8');                
            fs.appendFileSync('log.txt', "\r\n" + "Actors: " + response.data.Actors + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');
        })
}

module.exports = getMovie;