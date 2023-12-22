import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL, // "leda.jacobi81@ethereal.email",
    pass: process.env.SMTP_PASSWORD, // "CSTs8a3MpU8YxWDNAp",
  },
});

export const sendOTPViaEmail = async (name, emailId, OTP) => {
  try {
    const info = await transporter.sendMail({
      from: `"Vigor Launchpad" <${process.env.FROM_EMAIL_ID_FOR_EMAIL_VERIFICATION}>`,
      to: emailId,
      subject: "Email verification",
      text: OTP,
      html: `<div><h1>Hi ${name},</h1> <p>OTP: <b>${OTP}</b> to validate your vigor launchpad account</p></div>`,
    });

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
