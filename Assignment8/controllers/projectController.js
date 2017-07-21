var Project = require('../models/project.js').Project;
module.exports = {
  getProjects : (req, res) => {
    Project.find({}, (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send(result);
    });  
  },
  getProjectById : (req, res) => {
    Project.find({_id : req.params.project_id}, (error, result) => {
      if (error) {
        console.log(error);
        return res.send(error);
      } 
      res.send(result);
    });
  },
  createProject : (req, res) => {
    const newProject = Project(req.body);
    newProject.save( (error) => {
      if (error) throw error;
      res.send("New project created");
    });
  },
  deleteProject : (req, res) => {
    Project.find( {_id : req.params.project_id}, (error, result) => {
      result.remove( (error) => {
        if(error) throw error;
        res.send("Succesfully deleted!");
      });
    });
  },
  updateProject : (req, res) => {
    Project.findOneAndUpdate({_id : req.params.project_id}, req.body, {new : true}, (error, result) => {
      if (error) throw error;
      res.send("Project details Updated!");
    });
  }
};
