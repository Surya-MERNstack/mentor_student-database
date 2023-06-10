
const express = require('express');
const collectionsData = require('../collectors/totalreq');

const router = express.Router();

router.post('/mentors' ,collectionsData.TotalMentors);
router.post('/student',collectionsData.TotalStudents);
router.get('/student', collectionsData.getingStudent);
router.get('/mentors',collectionsData.gettingMentors);
module.exports = router;
