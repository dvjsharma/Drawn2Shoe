import nodemailer from "nodemailer";

export const sendResetEmail = async (email, resetUrl) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        
        secureConnection:false,

        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },

        tls: {
            rejectunAuthorized:true
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Password Reset Request",
        text: `You requested a password reset. Click the link to reset your password: ${resetUrl}`,
    };

    await transporter.sendMail(mailOptions);
};
