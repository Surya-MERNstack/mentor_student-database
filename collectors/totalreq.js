
const mentor = require("../models/mentor");
const student = require("../models/student");

const TotalMentors = async (req, res) => {
  const newmentors = new mentor({
    name: req.body.name,
    subject: req.body.subject,
    student_id: req.body.student_id, 
  }); 

  try {
    await newmentors.save();
    res.status(200).json(newmentors);
  } catch (err) { 
    res.status(400).json({ message: "Error".err });
  }
};

const TotalStudents = async (req, res) => {
  const newstudent = new student({
    name: req.body.name,
    mentor_name: req.body.mentor_name,
  });

  try {
    await newstudent.save();
    res.status(200).json(newstudent);
  } catch (err) {
    res.status(400).json({ message: "Error".err });
  }
};

const getingStudent = async (req, res) => {
  try {
    const students = await student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ message: "Error".err });
  }
};

const gettingMentors = async (req ,res) => {
    try{
        const mentors = await mentor.find();
       res.status(200).json(mentors)
    }catch(err){
        res.status(400).json({message : "Error".err})
    }
}

const totaljoinData = [getingStudent,gettingMentors];



module.exports.TotalMentors = TotalMentors;
module.exports.TotalStudents = TotalStudents;
module.exports.getingStudent = getingStudent;
module.exports.gettingMentors = gettingMentors; 

module.exports.totaljoinData = totaljoinData