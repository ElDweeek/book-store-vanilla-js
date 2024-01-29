import config from "./config"
import jwt  from "jsonwebtoken";

export const generateToken = (user) =>{
  return jwt.sign({
    _id: user._id,
    fName: user.fName,
    lName: user.lName,
    email: user.email,
    isAdmin: user.isAdmin,
  },
  config.JWT_SECRET
  );
};