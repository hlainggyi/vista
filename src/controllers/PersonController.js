// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

const { Person, Company } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      let categories = req.query.c;
      const persons = await Person.aggregate([
        { $match: { categories: categories, isActive: { $gt: 0 } } },
        {
          $project: {
            profileImage: "$personInfo.profileImage",
            isActive: "$isActive",
            code: "$code",
            name: "$personInfo.name",
            age: {
              $divide: [
                { $subtract: [new Date(), "$personInfo.dob"] },
                365 * 24 * 60 * 60 * 1000
                // { $round: ["$subtract", 1] }
              ]
            },
            gender: "$personInfo.gender",
            address: "$personInfo.currentAddress",
            phone: "$personInfo.phoneNo",
            jpLanguageLevel: "$jpInfo.jpLevels",
            // certificate: "$jpInfo.certificate",
            passport: "$jpInfo.passport",
            edus: "$edus"
          }
        }
      ]).allowDiskUse(true);
      res.send({
        persons: persons,
        querry: req.querry
      });
    } catch (err) {
      res.status(500).send({
        error: "This error is Person index"
      });
    }
  },
  async post(req, res) {
    try {
      // 1. Find the the actual company
      const company = await Company.findById({ _id: req.user.company });

      const codeCounter = await Person.aggregate([
        {
          $match: { company: company._id }
        }
      ]);

      // 2. Create a new Person
      const newPerson = {
        company: req.user.company,
        categories: req.body.categories,
        code: codeCounter.length + 1,
        isActive: req.body.isActive,
        personInfo: req.body.personInfo,
        personDetail: req.body.personDetail,
        jpInfo: req.body.jpInfo,
        edus: req.body.edus,
        jobs: req.body.jobs,
        families: req.body.families,
        questions: req.body.questions,
        other: req.body.other,
        images: req.body.images
      };

      const person = await Person.create(newPerson);

      // // 3. Add newly created student to the actual company

      company.persons.push(person);

      await company.save();

      res.send({
        // company: company,
        person: person,
        success: true,
        message: "Person register is successiful !"
      });
    } catch (err) {
      res.status(500).send({
        error: "This error is Person create"
      });
    }
  },
  async show(req, res) {
    try {
      const person = await Person.findById({ _id: req.params.personId });

      res.send({
        person: person
      });
    } catch (err) {
      res.status(500).send({
        error: "This error is person show"
      });
    }
  },
  async put(req, res) {
    try {
      const editPerson = {
        isActive: req.body.isActive,
        personInfo: req.body.personInfo,
        personDetail: req.body.personDetail,
        jpInfo: req.body.jpInfo,
        edus: req.body.edus,
        jobs: req.body.jobs,
        families: req.body.families,
        questions: req.body.questions,
        other: req.body.other,
        images: req.body.images
      };
      await Person.update({ _id: req.body.person }, editPerson);

      const gallery = {
        name: req.body.galleryImage.name,
        src: req.body.galleryImage.src,
        caption: req.body.galleryImage.caption
      };

      res.send({
        saved: true,
        message: "success updated"
      });
    } catch (err) {
      res.status(500).send({
        error: "This error is person put"
      });
    }
  },

  async remove(req, res) {
    try {
      const person = await Person.remove({ _id: req.params.personId });
      res.send("Success deleted !");
    } catch (err) {
      res.status(500).send({
        error: "This error is Person remove"
      });
    }
  },

  async resume(req, res) {
    try {
      const general = await Person.find(
        {
          categories: "General",
          isActive: { $gt: 0 }
        },
        { _id: 1 }
      );

      const generalInterviewList = await Person.find(
        {
          categories: "General",
          isActive: 2
        },
        { _id: 1 }
      );

      const generalInterviewPass = await Person.find(
        {
          categories: "General",
          isActive: 3
        },
        { _id: 1 }
      );

      const generalOnJob = await Person.find(
        {
          categories: "General",
          isActive: 5
        },
        { _id: 1 }
      );

      const caregiver = await Person.find(
        {
          categories: "Caregiver",
          isActive: { $gt: 0 }
        },
        { _id: 1 }
      );

      const careInterviewList = await Person.find(
        {
          categories: "Caregiver",
          isActive: 2
        },
        { _id: 1 }
      );

      const careInterviewPass = await Person.find(
        {
          categories: "Caregiver",
          isActive: 3
        },
        { _id: 1 }
      );

      const careOnJob = await Person.find(
        {
          categories: "Caregiver",
          isActive: 5
        },
        { _id: 1 }
      );

      const it = await Person.find(
        {
          categories: "IT",
          isActive: { $gt: 0 }
        },
        { _id: 1 }
      );

      const itInterviewList = await Person.find(
        {
          categories: "IT",
          isActive: 2
        },
        { _id: 1 }
      );

      const itInterviewPass = await Person.find(
        {
          categories: "IT",
          isActive: 3
        },
        { _id: 1 }
      );

      const itOnJob = await Person.find(
        {
          categories: "IT",
          isActive: 5
        },
        { _id: 1 }
      );

      const engineer = await Person.find(
        {
          categories: "Engineer",
          isActive: { $gt: 0 }
        },
        { _id: 1 }
      );

      const engineerInterviewList = await Person.find(
        {
          categories: "Engineer",
          isActive: 2
        },
        { _id: 1 }
      );

      const engineerInterviewPass = await Person.find(
        {
          categories: "Engineer",
          isActive: 3
        },
        { _id: 1 }
      );

      const engineerOnJob = await Person.find(
        {
          categories: "Engineer",
          isActive: 5
        },
        { _id: 1 }
      );

      res.send({
        persons: {
          general: {
            total: general.length,
            interviewList: generalInterviewList.length,
            interviewPass: generalInterviewPass.length,
            onJob: generalOnJob.length
          },
          caregiver: {
            total: caregiver.length,
            interviewList: careInterviewList.length,
            interviewPass: careInterviewPass.length,
            onJob: careOnJob.length
          },
          it: {
            total: it.length,
            interviewList: itInterviewList.length,
            interviewPass: itInterviewPass.length,
            onJob: itOnJob.length
          },
          engineer: {
            total: engineer.length,
            interviewList: engineerInterviewList.length,
            interviewPass: engineerInterviewPass.length,
            onJob: engineerOnJob.length
          }
        }
      });
    } catch (err) {
      alert(err);
    }
  },

  async imageUpload(req, res) {
    try {
      // const person = await Person.findById({ _id: req.body.person });
      const newImage = await req.body;

      // person.images.push(newImage);

      // await person.save();

      res.send({
        images: newImage,
        saved: true,
        message: "success updated"
      });
      // const person = await Person.findById({ _id: req.params.personId });
    } catch (err) {
      res.status(500).send({
        error: "Failed upload ! "
      });
    }
  }
};
