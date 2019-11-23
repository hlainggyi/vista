const {Student, School} = require("../models");

module.exports = {
    async index (req, res) {
        try {
            const students = await Student.find(
                { school: req.user.school, isActive: 1 },
                { __v: 0, academicstudents: 0 })
                .populate('passGrade', { __v: 0, 'subjects': 0})
                .populate('updatedUser', {'name': 1, '_id': 1, 'email': 1 })
            res.send({
                students: students
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student index"
            })
        }
    },
    async post (req, res) {
        try {
            
            // 1. Find the the actual school
            const school = await School.findById({ _id: req.user.school });

            // 2. Create a new Student
            const newStudent = req.body;
            
            const student = await Student.create(newStudent)

            // 3. Add newly created student to the actual school
            school.students.push(student);
            
            await school.save();

            res.send({ 
                success: true,
                message: 'Student register is successiful !'
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Student create"
            })
        }
    },
    async show (req, res) {
        try {
            const student = await Student.findById({_id: req.params.studentId})
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is student show"
            })
        }
    },
    async put (req, res) {
        try {
            const student = await Student.update({_id: req.params.studentId}, req.body)
            res.send({
                student: student
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is student put"
            })
        }
    },
    async remove (req, res) {
        try {
            const student = await Student.remove({_id: req.params.studentId})
            res.send("Success deleted !")
        } catch (err) {
            res.status(500).send({
                error: "This error is Teaher remove"
            })
        }
    }
}