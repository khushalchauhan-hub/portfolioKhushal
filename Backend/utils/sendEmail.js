import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    text,
  });
};

export default sendEmail;
