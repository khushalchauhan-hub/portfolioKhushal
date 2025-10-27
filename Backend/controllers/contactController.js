import sendEmail from "../utils/sendEmail.js";

export const sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendEmail({
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email failed to send", error });
  }
};
