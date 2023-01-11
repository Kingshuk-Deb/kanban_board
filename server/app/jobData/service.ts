import { Response } from "express";
import mongoose from "mongoose";
import createAPIError from "../utils/error";
import logger from "../utils/logger";
import JobDataSchema from "./schema";

const testJob = async (req: any, res: Response) => {
  res.json({
    success: true,
  });
};

const createData = async (req: any, res: Response) => {
  try {
    const { job }: any = req.body;
    const newJob = new JobDataSchema(job);
    await newJob.save();
    return res.json({
      success: true,
      job,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const getData = async (req: any, res: Response) => {
  try {
    const job = await JobDataSchema.findById(req.params.id);
    if (!job) {
      return createAPIError(401, `Job not found by id:${req.params.id}`, res);
    }
    return res.json({
      success: true,
      job,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const updateData = async (req: any, res: Response) => {
  try {
    const job = await JobDataSchema.findById(req.params.id);
    const { body } = req;
    if (!job) {
      return createAPIError(401, `Job not found by id:${req.params.id}`, res);
    }
    await JobDataSchema.findByIdAndUpdate(req.params.id, {
      $set: body,
    });
    return res.json({
      success: true,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const deleteData = async (req: any, res: Response) => {
  try {
    const job = await JobDataSchema.findById(req.params.id);
    if (!job) {
      return createAPIError(401, `Job not found by id:${req.params.id}`, res);
    }
    await JobDataSchema.findByIdAndUpdate(req.params.id, {
      $set: {
        isDeleted: true,
      },
    });
    return res.json({
      success: true,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

export = { testJob, createData, getData, updateData, deleteData };
