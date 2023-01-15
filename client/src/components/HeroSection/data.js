import { v4 as uuidv4 } from "uuid";
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const jobTypes = {
  "New Project": 0,
  "In Progress": 1,
  Submitted: 2,
  Completed: 3,
};

export const ItemTypes = {
  TASK: "task",
};

export const taskData = [
  {
    jobType: "New Project",
    taskList: [
      {
        id: uuidv4(),
        title: "Final Project : App development",
        type: "Software Development",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "waiting",
        ongoing: false,
        submitted: false,
        submissionDate: null,
      },
      {
        id: uuidv4(),
        title: "Paper finding : Covid statistics",
        type: "Resarch Methodology",
        date: "Mar 22, 2022",
        priority: "MEDIUM",
        currentState: "waiting",
        ongoing: false,
        submitted: false,
        submissionDate: null,
      },
    ],
  },
  {
    jobType: "In Progress",
    taskList: [
      {
        id: uuidv4(),
        title: "Final Project : Wordpress website",
        type: "Software Development",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "ongoing",
        ongoing: true,
        submitted: false,
        submissionDate: null,
      },
    ],
  },
  {
    jobType: "Submitted",
    taskList: [
      {
        id: uuidv4(),
        title: "Final Project : Knowledge management paper",
        type: "Resarch Methodology",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "submitted",
        ongoing: true,
        submitted: true,
        submissionDate: "Feb 21, 2022",
      },
      {
        id: uuidv4(),
        title: "Exercise : Android XML",
        type: "Software Development",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "submitted",
        ongoing: true,
        submitted: true,
        submissionDate: "Feb 21, 2022",
      },
      {
        id: uuidv4(),
        title: "Exercise : RESTful vs REST API",
        type: "Collaborative Computing",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "submitted",
        ongoing: true,
        submitted: true,
        submissionDate: "Feb 21, 2022",
      },
    ],
  },
  {
    jobType: "Completed",
    taskList: [
      {
        id: uuidv4(),
        title: "Project 1 : System Design exercise for “Koki”",
        type: "Collaborative Computing",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "completed",
        ongoing: false,
        submitted: true,
        submissionDate: "Feb 21, 2022",
      },
      {
        id: uuidv4(),
        title: "Project 2 : Strategic system exercise for “Koki”",
        type: "Resarch Methodology",
        date: "Mar 22, 2022",
        priority: "HIGH",
        currentState: "completed",
        ongoing: false,
        submitted: true,
        submissionDate: "Feb 21, 2022",
      },
    ],
  },
];
