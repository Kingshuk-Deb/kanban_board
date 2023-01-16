import { v4 as uuidv4 } from "uuid";

export const ITEM_HEIGHT = 48;

export const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const workTypes = [
  "Software Development",
  "Resarch Methodology",
  "Collaborative Computing",
];

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

export const defaulttaskData = {
  id: uuidv4(),
  title: "",
  type: "Software Development",
  subject: "",
  description: "",
  date: new Date(),
  employeeName: "Kelly Snyder",
  priority: "LOW",
  currentState: "waiting",
  ongoing: false,
  submitted: false,
  submissionDate: null,
};

export const taskData = [
  {
    jobType: "New Project",
    taskList: [
      {
        id: uuidv4(),
        title: "Final Project : App development",
        type: "Software Development",
        subject: "subject1",
        description: "description1",
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
        subject: "subject2",
        description: "description2",
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
        subject: "subject1",
        description: "description1",
        date: "Mar 20, 2022",
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
        subject: "subject1",
        description: "description1",
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
        subject: "subject2",
        description: "description2",
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
        subject: "subject3",
        description: "description3",
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
        subject: "subject1",
        description: "description1",
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
        subject: "subject2",
        description: "description2",
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
