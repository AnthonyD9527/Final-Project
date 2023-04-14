import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Anthony ",
    lastName: "Diaz",
    email: "Adiaz2@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    location: "Long Beach, CA",
    occupation: "Software Engineer",
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Example",
    lastName: "Person",
    email: "thatman@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    friends: [],
    location: "Wilmington, CA",
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "some213guy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "",
    friends: [],
    location: "Carson, CA",
    __v: 0,
  },
  
  
];


