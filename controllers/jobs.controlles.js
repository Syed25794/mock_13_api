const Jobs = require("../models/jobs.models");

const saveJobs = async (req, res) => {
  try {
    const payload = new Jobs({
      company:req.body.company,
      postedAt:req.body.postedAt,
      level:req.body.level,
      role:req.body.role,
      location:req.body.location,
      language:req.body.language,
      city:req.body.city,
      contract:req.body.contract
    });
    payload.save();
    res.send({ msg: "successfully created Jobs" });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
};


const getAllJobs = async (req, res) => {
  const { page } = req.body;
  let skips = page*10;
  try {
    let data = await Jobs.find().skip(skips).limit(10);
    res.send({ data: data });
  } catch (error) {
    res.send({ msg: error });
  }
};

const searchJobs = async ( req,res )=>{
  const { page, language } = req.body;
  let skips = page*10;
  try {
    let data = await Jobs.find({language:language}).skip(skips).limit(10);
    res.send({"data":data});
  } catch (error) {
    res.send({"msg":"something went wrong in searching...."});
  }
}

const filterJobs = async ( req,res )=>{
  const { page , role } = req.body;
  let skips = page*10;
  try {
    let data = await Jobs.find({role:role}).skip(skips).limit(10);
    res.send({"data":data});
  } catch (error) {
    res.send({"msg":"something went wrong in filtering...."});
  }
}

const sortJobs = async ( req, res )=>{
  const { page ,order } = req.body;
  let skips = page*10;
  let sort_Value = 0;
  if( order === "asc" ){
    sort_Value=1;
  }else{
    sort_Value=-1;
  }
  try {
    let data = await Jobs.find().sort({postedAt:sort_Value}).skip(skips).limit(10);
    res.send({"data":data});
  } catch (error) {
    res.send({"msg":"something went wrong in sorting...."});
  }
}


module.exports = {
  saveJobs,
  getAllJobs,
  sortJobs,
  filterJobs,
  searchJobs
};
