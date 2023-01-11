import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobDataSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignedMembers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isDone: {
      type: Boolean,
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

const JobDataSchema = mongoose.model("jobData", jobDataSchema);

export = JobDataSchema;
