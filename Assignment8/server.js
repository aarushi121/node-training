const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const pathToProject = require('./routers/routeProject');
const pathToEmployee = require('./routers/routeEmployee')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/employees',pathToEmployee());
app.use('/projects',pathToProject());

const server = app.listen(3000, () => {
  console.log("Api listening at http://%s:%s", server.address().address, server.address().port);
})
   
