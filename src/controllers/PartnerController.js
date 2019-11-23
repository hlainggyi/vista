const {Partner, Company} = require("../models");

module.exports = {
    async index (req, res) {
        try {
            // const partner = await School.findById({ _id: req.user.partner }, {__v:0}).populate('teachers')
            // const teachers = school.teachers
            res.send({
                teachers: teachers
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher index"
            })
        }
    },
    async post (req, res) {
        try {
            // 1. Find the the actual school
            const partner = await School.findById({ _id: req.user.partner });

            // 2. Create a new teacher
            const newTeacher = {
                name: req.body.name,
                position: req.body.position,
                nrc: req.body.nrc,
                school: req.user.school
            }
           
            
            const teacher = await Teacher.create(newTeacher)

            // 3. Add newly created teacher to the actual school
            school.teachers.push(teacher);
            
            await school.save();
            res.send({
                success: true,
                message: 'Teacher create is successiful !'
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher create"
            })
        }
    },
    async show (req, res) {
        try {
            const teacher = await Teacher.findById({_id: req.params.teacherId})
            res.send({
                teacher: teacher
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher show"
            })
        }
    },
    async put (req, res) {
        try {
            const teacher = await Teacher.update({_id: req.params.teacherId}, req.body)
            res.send({
                teacher: teacher
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is Teacher put"
            })
        }
    },
    async remove (req, res) {
        try {
            const teacher = await Teacher.remove({_id: req.params.teacherId})
            res.send("Success deleted !")
        } catch (err) {
            res.status(500).send({
                error: "This error is Teaher remove"
            })
        }
    }
}