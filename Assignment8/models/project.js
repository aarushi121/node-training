
const mongoose = require('mongoose')
const conn = mongoose.createConnection('mongodb://localhost:27017/company');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project_name : String,
  developers : [ {type: Schema.Types.ObjectId, ref: 'Employees'} ],
  manager : { type: Schema.Types.ObjectId, ref: 'Employees' },
});

const Project = conn.model('Projects',ProjectSchema);
module.exports = {Project : Project};
