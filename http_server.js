var express = require('express');
var app     = express();

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('./'));

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000');
});
