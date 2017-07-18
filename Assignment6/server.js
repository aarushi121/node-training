var express = require('express')
var bodyParser = require('body-parser');
var request = require('request');
var getClients = require('./getClients.js')
var getClientById = require('./getClientById.js')
var postClient = require('./createClient.js')
var deleteClientById = require('./deleteClientById.js')
var getLists = require('./getLists.js')
var app = express() 

var url = 'https://api.createsend.com/api/v3.1/clients';
var key = "Basic " + new Buffer("9a86a35217185b745506196eb27709a0:").toString('base64');
var headers = { "Authorization" : key }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

getClients.getClients(app, request, url, headers);
getClientById.getClientById(app, request, url, headers);
postClient.createClient(app, request, url, headers);
deleteClientById.deleteClientById(app, request, url, headers);
getLists.getLists(app, request, url, headers);

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example api listening at http://%s:%s", host, port)
})
    
