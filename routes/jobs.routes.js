const Router = require("express");
const { saveJobs, getAllJobs, filterJobs, sortJobs, searchJobs } = require("./../controllers/jobs.controlles");

const JobsRouters = Router();

JobsRouters.post("/create", saveJobs);

JobsRouters.get("/all", getAllJobs);

JobsRouters.get("/filter",filterJobs);

JobsRouters.get("/sort",sortJobs);

JobsRouters.get("/search",searchJobs);

module.exports = JobsRouters;
