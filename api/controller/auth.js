import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

//REGISTER
export const register = async (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    await newUser.save();
    return res.status(201).json({
      newUser,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};

//LOGIN
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "Wrong Email or Password",
      });
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPass = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPass !== req.body.password) {
      return res.status(404).json({
        message: "Wrong Email or Password",
      });
    }
    const { password, ...others } = user._doc;
    const accessToken = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );
    return res.status(201).json({
      ...others,
      accessToken,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};
