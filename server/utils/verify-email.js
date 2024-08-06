import nodemailer from "nodemailer";

export const sendVerifyEmail = async (email, verificationLink) => {
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
        subject: 'Email Verification',
        text:`Click the following link to verify your email: ${verificationLink}`,
    };

    await transporter.sendMail(mailOptions);
};
