
const mongoose = require('mongoose')
const conn = mongoose.createConnection('mongodb://localhost:27017/company');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  employee_name : String,
  reporting_manager : {type : Schema.Types.ObjectId, ref : "Employees" },
});

const Employee = conn.model('Employees',EmployeeSchema);
module.exports = {Employee:Employee}
