const { Company, User, Role } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const companies = await Company.find(
        {},
        {
          users: 0,
          _id: 0
        }
      ).sort({ date: -1 });
      res.send({
        companies: companies
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to index the companies"
      });
    }
  },
  async show(req, res) {
    try {
      const newCompany = await Company.findById({
        _id: req.user.company
      });
      const company = {
        name: newCompany.name,
        email: newCompany.email,
        address: newCompany.address,
        yenExchangeRate: newCompany.yenExchangeRate
      };
      res.send({
        company: enData(company)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show"
      });
    }
  },
  async post(req, res) {
    try {
      // 1. Check email
      const user = await User.findOne({ email: req.body.email }).exec();

      if (user != null) {
        if (user.email == req.body.email) {
          res.status(500).send({
            error: `Your email: ${req.body.email} has already been registered`
          });
        }
      } else {
        // 2. Create company
        // const company = await req.body
        // console.log(company)
        const company = await Company.create(req.body);
        // 3. Find role
        const role = await Role.findOne({ name: "admin" }).exec();

        // 4. Create a new user
        const newUser = {
          name: "admin",
          email: req.body.email,
          password: "password",
          company: company._id,
          role: role._id
        };
        const addUser = await User.create(newUser);
        // 3. Add newly created user to the actual company
        company.users.push(addUser);
        await company.save();
      }

      res.send({
        saved: true,
        message: "Create company Successfully"
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to create the company"
      });
    }
  },

  // // company new Create { url in not companyId}
  // async create (req, res) {
  //   try {
  //     // 1. Check email
  //     const user = await User.findOne({email: req.body.email}).exec();

  //     if (user != null) {
  //       if(user.email == req.body.email) {
  //         res.status(500).send({
  //           error: `Your email: ${req.body.email} has already been registered`
  //         })
  //       }
  //     }

  //     // 2. Create company
  //     const company = await Company.create(req.body)
  //     // 3. Find role
  //     const role = await Role.findOne({name: 'Mananger'}).exec();

  //     // 4. Create a new user
  //     const newUser = {
  //       name: "admin",
  //       email: req.body.email,
  //       password: "password",
  //       company: Company._id,
  //       role: role._id
  //     }
  //     const addUser = await User.create(newUser)

  //     // 5. Add newly created user to the actual company
  //     Company.users.push(addUser)
  //     await Company.save();
  //     res.send({
  //       saved : true,
  //       message: "Create company Successfully"
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to create the company'
  //     })
  //   }
  // },
  async put(req, res) {
    try {
      const company = await Company.updateOne(
        { _id: req.user.company },
        req.body.data
      );
      res.send({
        company: enData(company),
        saved: true,
        message: "Your company info is success updated !"
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to update the company"
      });
    }
  }
  // async remove (req, res) {
  //   try {
  //     await Company.remove({ _id: req.params.companyId })
  //     res.send("success deleted")
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to delete the company'
  //     })
  //   }
  // }
};
