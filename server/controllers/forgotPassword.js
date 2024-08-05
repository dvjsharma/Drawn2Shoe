import { prisma } from "../app.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { sendResetEmail } from "../utils/email.js";

export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    const user = await prisma.mainuser.findUnique({ where: { email } });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const token = uuidv4();
    const hashedToken = await bcrypt.hash(token, 10);


    // Ensure any previous tokens for this user are deleted
    await prisma.passwordResetToken.deleteMany({
        where: { userId: user.email }
    });

   const passwd = await prisma.passwordResetToken.create({
        data: {
            token: hashedToken,
            userId: user.email,
            expiresAt: new Date(Date.now() + 3600000), // 1 hour from now
        }
    });

    const resetUrl = `http://localhost:5173/reset-password/${token}/${passwd.id}`;
    await sendResetEmail(email, resetUrl);

    res.status(200).json({ message: "Password reset link has been sent to your email" });
};
export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const {id} = req.params;
    const resetToken = await prisma.passwordResetToken.findUnique({
        where: {
            expiresAt: { gte: new Date() },

            id:parseInt(id, 10)
        }
    });

    if (!resetToken) {
        return res.status(400).json({ message: "Invalid or expired token1" });
    }

    const isValid = await bcrypt.compare(token, resetToken.token);
    if (!isValid) {
        return res.status(400).json({ message: "Invalid or expired token2" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.mainuser.update({
        where: { email: resetToken.userId },
        data: { passwd: hashedPassword }
    });

    await prisma.passwordResetToken.delete({ where: { id: resetToken.id } });

    res.status(200).json({ message: "Password has been reset successfully" });
};
