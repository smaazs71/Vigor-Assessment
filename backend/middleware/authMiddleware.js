import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { getUserById } from "../controller/userController.js";

// export const protect = asyncHandler(async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     // Get token from header
//     token = req.headers.authorization.split(" ")[1];
//     console.log(token);

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     console.log(decoded);

//     if (decoded.id && decoded.exp < Date.now()) {
//       // Get user from token
//       req.user = await getUserById(decoded.id);
//       console.log(req.user);

//       next();
//     } else {
//       res.status(401);
//       throw new Error("Not authorized: " + decoded.message);
//     }
//   }
//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, no token");
//   }
// });

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.id && decoded.exp < Date.now()) {
        // Get user from token
        req.user = await getUserById(decoded.id);

        next();
      } else {
        res.status(401);
        throw new Error(decoded.message);
      }
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized: " + err.message);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
