const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/users`);

const UserSchema = new Schema({
  profile_id: String,
  email: String,
  access_token: String,
  date_added: {type: Date, default: Date.now}
}); 

const User = mongoose.model('User', UserSchema);
module.exports = User;