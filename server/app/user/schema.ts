import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      enum: ["engineering", "consultanting", "marketing"],
      required: true,
    },
    userType: {
      type: String,
      enum: ["admin", "employee"],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = mongoose.model("user", userSchema);

export = UserSchema;
