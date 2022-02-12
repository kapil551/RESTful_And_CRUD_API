const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

// @GET "/students"
router.route("/").get((req, res) => {

    // console.log(users);
    res.json({success: true, message: 'students GET API' });
});

// @POST "/students"
// create a new student
router.route("/").post( async(req, res) => {

    try {

        // console.log(req.body);

        const studentData = req.body;

        const studentNameExists = await Student.exists({ name: studentData.name });
        const emailExists = await Student.exists({ email: studentData.email });
        const phoneExists = await Student.exists({ phone: studentData.phone });

        if(studentNameExists) {
            res.status(409).json({ success: false, message: "Student name is taken"});
            return studentNameExists;
        }

        if(emailExists) {
            res.status(409).json({ success: false, message: "Email is already registered"});
            return emailExists;
        }

        if(phoneExists) {
            res.status(409).json({ success: false, message: "Phone is already added"});
            return phoneExists;
        }

        let newStudent = new Student(studentData);
        newStudent = await newStudent.save();
        
        const student = { _id: newStudent._id, name: newStudent.name, email: newStudent.email };

        res.status(201).json({ success: true, student });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Unable to add a new student",
            errMessage: err.message,
        })
    }
});

module.exports = router;

/*

{
    name: 'ravi kumar',
    email: 'ravik12@gmail.com',
    phone: 9122334455,
    address: 'B-201, Laxmi Nagar, Mathura, Uttar Pradesh'
}

*/