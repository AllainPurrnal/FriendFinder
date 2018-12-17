var path = require('path');

module.exports = function(app) {
    //GET request to handle when a user "visits" a certain page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Defaults to Home page
    app.get("*", function(req, res){
        res.sendFile(path.joine(__dirname, "../public/home.html"))
    });
}