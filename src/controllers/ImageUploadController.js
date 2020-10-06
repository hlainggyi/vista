const { Person } = require("../models");

module.exports = {
    async patch(req, res) {
        try {

            const updatePerson = {
                personInfo: req.body.personInfo
            };
            const image = await Person.update({ _id: req.params.personId }, updatePerson);

            res.send({
                saved: true,
                message: "Success updated !",
                image: image
            });
        } catch (err) {
            res.status(500).send({
                error: "upload failed"
            });
        }

    }
}