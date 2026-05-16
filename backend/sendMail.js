const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully");

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;