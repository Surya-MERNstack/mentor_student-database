const express = require("express");
const collectionsData = require("../collectors/totalreq");

const router = express.Router();

//mentors end point
router.post("/mentors", collectionsData.TotalMentors);
router.get("/mentors", collectionsData.gettingMentors);

//student end point
router.post("/student", collectionsData.TotalStudents);
router.get("/student", collectionsData.getingStudent);

//total Data default
router.get("/", collectionsData.totaljoinData);

//list without mentor
router.get("/wtmentor", collectionsData.studentsWithoutMentor);

module.exports = router;
