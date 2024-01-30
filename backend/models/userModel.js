import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {type: String , required: true},
  lName: {type: String , required: true},
  date: {type: Date , required: false},
  phoneNumber: {type: Number , required: false},
  email: {type: String , required: true, index: true, unique: true},
  password: {type: String , required: true},
  isAdmin: {type: Boolean , required: true, default: false},
})
const User = mongoose.model('User', userSchema)

export default User;