//DEPENDENCIES 
var path = require("path");

//ROUTING
module.exports = function(app) {
    //HTML GET Requests

    // Defualt page if no other routes found
    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    
}