import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "๐งพ Todo Task",
    task: [
      {
        id: uuidv4(),
        task_title: "task 1",
      },
      {
        id: uuidv4(),
        task_title: "task 2 ",
      },
      {
        id: uuidv4(),
        task_title: "task 3",
      },
      {
        id: uuidv4(),
        task_title: "task 4",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ๐ In Progress Task",
    task: [
      {
        id: uuidv4(),
        task_title: "task 5",
      },
      {
        id: uuidv4(),
        task_title: "task 6",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "โ compeleted Task",
    task: [
      {
        id: uuidv4(),
        task_title: "task 7 ",
      },
      {
        id: uuidv4(),
        task_title: "task 8",
      },
      {
        id: uuidv4(),
        task_title: "task 9",
      },
    ],
  },
];
export default data;
