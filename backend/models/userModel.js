import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "User name required"],
      unique: [true, "User name already exist"],
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email address",
      ],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password required"],
    },
    phoneNumber: {
      type: String,
    },
    country: {
      type: String,
    },
    emailValidated: {
      type: Schema.Types.Mixed,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const SALT_WORK_FACTOR = 10;

userSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validateUser = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw new Error("valdating Password fail: " + err.message);
  }
};

userSchema.methods.validateUniqueness = async function (object) {
  try {
    let unique = true;
    let message = "Unique";
    const name = Object.keys(object)[0];
    const value = Object.values(object)[0];
    const data = await this.model("User").find({ [name]: value });
    if (
      Object.keys(data).length > 1 ||
      (Object.keys(data).length == 1 && data[0]._id != this._id)
    ) {
      unique = false;
      message = "User with given " + name + " already present";
    }

    return {
      unique,
      message,
    };
  } catch (err) {
    return new Error("Valdating uniqueness fail: " + err.message);
  }
};

// userSchema.post("save", function (doc) {
//   doc.password = undefined;
// });

export const userModel = mongoose.model("User", userSchema);
