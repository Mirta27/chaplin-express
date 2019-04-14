var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function() {
    console.log("Charlie Chaplin running in port 3000...");
});