var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
  name: String,
  description: String,
  level: Number
});

roleSchema.statics.findByRole = async (role) => {
  const roleLevel = await Role.findById({_id: role})
  
    if ( roleLevel.name != 'developer') {
        // throw new Error('Unable to login')
      const roles  = await Role.find( { level: { $gt: 1 } } ).sort({"level": 1})
      return roles
    } else {
      const roles  = await Role.find( { level: { $gt: 0 } } ).sort({"level": 1})
      return roles
    }
}


const Role = mongoose.model('Role', roleSchema)

module.exports = Role
