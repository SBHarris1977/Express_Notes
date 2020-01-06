//Libraries used
var express = require("express");
var path = require("path");
//var index = require('./assets/js/index');
var fs = require("fs");
//var $ = require("jquery");
//var myNote = fs.readFile("db.json")

//Set up the express app to run
var app = express();
var PORT = 3000;

//set up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route to the main page and the note entry page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

//Post new note
app.post("/api/notes", function(req, res) { 
    var newNote = req.body;
    console.log(newNote);
var data = JSON.stringify(newNote, null, 2);
fs.writeFileSync("db.json", data, (err) => {
if (err) throw err;
console.log("data written to file");

notes.push(newNote);
res.send(newNote);

//Get note
app.get("api/notes", function(req, res) {
    return res.json(notes);
});

//Get new Note and save to JSON file
app.get("api/notes/:note", function(req, re) {
    var newNote = req.params.note;
    console.log(newNote);
    fs.readFile("db.json", "utf8", function(err, data) {
        if (err) console.log("error", err);
        return res.json(notes);
    })
});


});
})

//Start the server to begin listening
app.listen(PORT, function() {
    console.log("App listining to PORT " + PORT);
})
