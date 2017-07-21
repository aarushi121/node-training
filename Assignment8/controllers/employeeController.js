const mongoose = require('mongoose')
const Employee = require('../models/employee.js').Employee;

module.exports = {
  getEmployees : (req, res) => {
    Employee.find({}, (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send(result);
    });
  },
  getEmployeeById : (req, res) => {
    Employee.find({_id : req.params.employee_id}, (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send(result);
    });
  },
  createEmployee : (req, res) => {
    const newEmployee = Employee(req.body);
    newEmployee.save( (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send("New employee created");
    });
  },
  deleteEmployee : (req, res) => {
    Employee.find( {_id : req.params.employee_id}, (error, result) => {
      result.remove( (error) => {
        if (error) {
        console.log(error);
        return res.send(error);
      } 
        res.send("Succesfully deleted!");
      });
    });
  },
  updateEmployee : (req, res) => {
    Employee.findOneAndUpdate({_id : req.params.employee_id}, req.body, {new : true}, (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send("Employee details Updated!");
    });
  }
};
