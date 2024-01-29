import express from 'express'
import User from '../models/userModel';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils';

const userRouter = express.Router();

userRouter.get("/admin", expressAsyncHandler( async (req, res) => {
  try {
    const user = new User({
      fName: 'Abdelrahman',
      lName: 'admin',
      email: 'pft@waw.com',
      password: 'asdasd',
      isAdmin: true,
    })
    const createdUser = await user.save()
    res.send(createdUser)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}));
userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (!signinUser) {
    res.status(401).send({
      message: 'Inavlid Email or Password'
    })
  } else {
    res.send({
      _id: signinUser._id,
      fName: signinUser.fName,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: generateToken(signinUser)
    })
  }
}));
userRouter.post('/register', expressAsyncHandler(async (req, res) => {
  const user = new User({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
  })
  const createdUser = await user.save()
  if (!createdUser) {
    res.status(401).send({
      message: 'Inavlid User Data'
    })
  } else {
    res.send({
      _id: createdUser._id,
      fName: createdUser.fName,
      lName: createdUser.lName,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser)
    })
  }
}));
export default userRouter;