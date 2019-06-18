var compression = require('compression')
var cacheControl = require("express-cache-controller");
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
var secure = require('express-force-https')
const port = process.env.PORT || 3000;
const app = express();
app.use(compression())
// serve static assets normally
//app.use(secure);
app.use(express.static(__dirname + '/build'));
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.use(cacheControl({ maxAge: 1080 }));
app.get('*', function (request, response) {
response.sendFile(path.resolve(__dirname, 'build/index.html'));
});

/* https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/compropertee.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/compropertee.com/fullchain.pem')
}, app) */
app.listen(port);
console.log("Compropertee Dashboard Started on port " + port);
