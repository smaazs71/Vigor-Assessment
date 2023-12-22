import { userModel } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/jwt.js";
import { sendOTPViaEmail } from "../utils/nodemailer.js";
import otpGenerator from "otp-generator";

// @desc GET a User by id
export const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);

    if (!user) throw new Error("User not found");

    return user;
  } catch (err) {
    throw new Error("Error in fetching user: " + err.message);
  }
};

// @desc Add User
// @route POST api/v1/user
// @access Private
export const register = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("No data (body) found");
  }

  const {
    userName,
    name,
    email,
    password,
    confirmPassword,
    phoneNumber,
    country,
  } = req.body;

  if (password !== confirmPassword) throw new Error("password do not match");

  const userCheck = await userModel.findOne({ userName });
  if (userCheck) throw new Error("User with given details already exists");

  const body = await userModel.create({
    userName,
    name,
    email,
    password,
    phoneNumber,
    country,
  });
  const otp = otpGenerator.generate(6, {
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });

  body.emailValidated = otp;

  const user = new userModel(body);

  user.save();

  await sendOTPViaEmail(name, email, otp);

  res.status(200).send("Success");
});

// @desc Get Update User
// @route PUT api/v1/user
// @access Private
export const updateUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, country } = req.body;

  const user = await userModel.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  if (phoneNumber) user.phoneNumber = phoneNumber;
  if (country) user.country = country;

  await user.save();

  // res.status(200).json(user);
  res.status(200).send("Success");
});

// @desc login a User
// @route POST api/v1/user/login
// @access private
export const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  res.status(400);

  if (!userName && !password)
    throw new Error("Invalid userName or password required.");

  const user = await userModel.findOne({ userName }).select("password");

  if (!user) throw new Error("User not found");

  console.log(user);
  if (!user.validateUser(password)) throw new Error("Invalid credentials");

  const token = generateToken(user._id);

  res.set("Content-Type", "text/html").status(200).send(JSON.stringify(token));
});

// @desc get me
// @route POST api/v1/user/validate-email
// @access private
export const validateEmail = asyncHandler(async (req, res) => {
  //   console.log("ID: ", req.params.id);

  const { OTP } = req.body;

  const user = await userModel.findById(req.user._id);

  if (OTP !== user.emailValidated) throw new Error("Invalid OTP");

  user.emailValidated = true;

  await user.save();

  res.status(200).send("Success");
});
