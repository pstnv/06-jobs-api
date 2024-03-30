const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");
const { BadRequestError, NotFoundError } = require("../errors/index");

const getAllJobs = async (req, res) => {
    res.send("get all jobs");
};

const getSingleJob = async (req, res) => {
    res.send("get a single job");
};

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
    res.send("update a job");
};

const deleteJob = async (req, res) => {
    res.send("delete a job");
};

module.exports = { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
