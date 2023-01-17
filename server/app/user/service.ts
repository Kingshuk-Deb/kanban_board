import { Response } from "express";
import { data } from "../test_data";
import createAPIError from "../utils/error";
import logger from "../utils/logger";
import UserSchema from "./schema";

const test_password = {
  lise: "abcd1234",
  tamekia: "abcd12345",
  ranee: "abcd123456",
  refugio: "abcd1234567",
  sunshine: "abcd12345678",
};

const testUser = async (req: any, res: Response) => {
  res.json({
    success: true,
  });
};

const loginUser = async (req: any, res: Response) => {
  try {
    const { username, password } = req.body;
    if (test_password[username] !== password) {
      return createAPIError(401, `Passwords didn't match!`, res);
    }
    const user = await UserSchema.findOne({ username });
    if (!user) {
      return createAPIError(401, `User not found by id:${req.params.id}`, res);
    }
    return res.json({
      success: true,
      user,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const createData = async (req: any, res: Response) => {
  try {
    const user: any = req.body;
    const newUser = new UserSchema(user);
    await newUser.save();
    return res.json({
      success: true,
      newUser,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const getData = async (req: any, res: Response) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    if (!user) {
      return createAPIError(401, `User not found by id:${req.params.id}`, res);
    }
    return res.json({
      success: true,
      user,
    });
  } catch (e) {
    const error = e.message;
    logger.error(error);
    return createAPIError(401, error, res);
  }
};

const updateData = async (req: any, res: Response) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    const { body } = req;
    if (!user) {
      return createAPIError(401, `User not found by id:${req.params.id}`, res);
    }
    await UserSchema.findByIdAndUpdate(req.params.id, {
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
    const user = await UserSchema.findById(req.params.id);
    if (!user) {
      return createAPIError(401, `User not found by id:${req.params.id}`, res);
    }
    await UserSchema.findByIdAndUpdate(req.params.id, {
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

export = { testUser, loginUser, createData, getData, updateData, deleteData };
