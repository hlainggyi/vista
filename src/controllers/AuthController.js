const { User, Company, Role } = require("../models");
const Labels = require("../json");
const enData = require("../data/crypto");
const bcrypt = require("bcrypt");

module.exports = {
  async index(req, res) {
    try {
      var users = await User.find({}, { _id: 0, __v: 0, company: 0 }).populate('role', { _id: 0, name: 1 });
      res.send({
        users: enData(users)
        // user: "User Auth"
      });
    } catch (err) {
      res.status(500).send({
        error: "This is AuthController.index error"
      });
    }
  },
  async register(req, res) {
    try {
      //   1. Find the the actual company
      const company = await Company.findById({ _id: req.user.company }, {});

      // 2. Create a new user
      const user = await req.body.data;
      const setUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        company: req.user.company,
        role: user.role
      };

      const addUser = await User.create(setUser);

      // 3. Add newly created user to the actual school
      company.users.push(addUser);

      await company.save();

      res.send({
        saved: true,
        message: "Successfully created new user."
      });
    } catch (err) {
      res.status(500).send({
        error: "New user registration failed !"
      });
    }
  },

  async devRegister(req, res) {
    try {
      // 2. Create a new user
      const user = await User.create(req.body);

      res.send({
        saved: true,
        user: user,
        message: "Create Developer User Successfully"
      });
    } catch (err) {
      res.status(500).send({
        error: "This is Register"
      });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findByCredentials(
        req.body.data.email,
        req.body.data.password
      );

      if (user.isActive) {
        
      const role = await Role.findById({ _id: user.role });

      function isAdmin(val) {
        if (val == "admin") {
          return true;
         } else {
          return false;
         }
      }
        
      
      const token = await user.generateAuthToken();
      const company = await Company.findOne(
        { _id: user.company },
        { _id: 0, __v: 0 }
      );
      const labels = await Labels;

      res.send({
        user: enData(user),
        company: enData(company),
        meta: enData(isAdmin(role.name)),
        token: enData(token),
        labels: enData(labels)
      });
    
      } else {
        res.status(500).send({
          err: "This user is restricted !"
        });  
      }

    } catch (err) {
      res.status(500).send({
        err: "This user could not be found !"
      });
    }
  },

  async userUpdate(req, res) {
    try {
      const role = await Role.findOne({ name: req.body.data.role }, { _id: 1 }).exec();
      let user = {
        isActive: req.body.data.isActive,
        role: role._id,
      } ;
      await User.updateOne({ email: req.body.data.email }, user);
      res.send({
        saved: true,
        message: "Your action was successful."
      })  
    } catch (err) {
      res.status(500).send({
        err: "Your action failed.!"
      });
    }
  },

  async show(req, res) {
    try {
      res.send({
        user: enData(req.user)
        // user: "User Auth"
      });
    } catch (err) {
      res.status(500).send({
        err: "This user could not be found !"
      });
    }


  },

  async userName(req, res) {
    try {
      const user = {name: req.body.data.name}
      await User.updateOne({ _id: req.user._id }, user);
      res.send({
        saved: true,
        message: "Your name is updated !."
      })  
    } catch (err) {
      res.status(500).send({
        err: "Your action failed.!"
      });
    }
  },

  async changePassword (req, res) {
    try {

      const user = await User.findByCredentials(
        req.user.email,
        req.body.data.oldPassword
      );
      const newPassword = req.body.data.newPassword;
      const confirmPassword = req.body.data.confirmPassword;

        if ( newPassword == confirmPassword ) {
          const setUser = {
            password: await bcrypt.hash(newPassword, 8),
          };
          await User.update({ _id: req.user._id }, setUser);
        }

      res.send({
        saved: true,
        message: "Your change password is Successiful !"
      })  
    } catch (err) {
      res.status(500).send({
        error: "Your password change failed !"
      });      
    }
  }
};
