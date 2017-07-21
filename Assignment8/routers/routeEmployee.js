const express = require('express');
const controller2 = require('../controllers/employeeController');
const router = express.Router();

const routing = () => {
  router.get('/', controller2.getEmployees);
  router.get('/:employee_id',controller2.getEmployeeById);
  router.post('/',controller2.createEmployee);
  router.put('/:employee_id',controller2.updateEmployee);
  router.delete('/:employee_id',controller2.deleteEmployee);
  return router;
}
module.exports = routing;
