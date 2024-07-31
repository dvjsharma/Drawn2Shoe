const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  // Email to be sent to the website admin
  const mailOptionsToAdmin = {
    from: email,
    to: "info@foodiweb.com",
    subject: `New message from ${name}`,
    text: message,
  };

  // Confirmation email to be sent to the user
  const mailOptionsToUser = {
    from: "info@foodiweb.com",
    to: email,
    subject: "We have received your query",
    text: `Hello ${name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest regards,\nFoodiesWeb Team`,
  };

  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);
    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails." });
  }
};

module.exports = { sendEmail };
