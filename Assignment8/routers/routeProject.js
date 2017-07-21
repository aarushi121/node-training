const express = require('express');
const controller1 = require('../controllers/projectController');
const router = express.Router();

const routing = () => {
  router.get('/', controller1.getProjects)
  router.get('/:project_id',controller1.getProjectById);
  router.post('/',controller1.createProject);
  router.put('/:project_id',controller1.updateProject);
  router.delete('/:project_id',controller1.deleteProject);
  return router;
}
module.exports = routing;
