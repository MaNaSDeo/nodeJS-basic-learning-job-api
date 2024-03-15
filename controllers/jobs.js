const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};
const getJob = async (req, res) => {
  res.send("Get One Job");
};
const createJob = async (req, res) => {
  res.send("Create One Job");
};
const updateJob = async (req, res) => {
  res.send("Update One Job");
};
const deleteJob = async (req, res) => {
  res.send("Delete One Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
