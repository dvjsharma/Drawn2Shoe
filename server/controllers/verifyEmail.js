
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();

export const verifyEmail = async (req, res) => {
  const { token, email } = req.query;

  try {

    const tempUser = await prisma.tempUser.findUnique({
      where: { email },
    });

    if (!tempUser) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const isValid = await bcrypt.compare(token, tempUser.token);

    if (!isValid) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    await prisma.mainuser.create({
      data: {
        name: tempUser.name,
        email: tempUser.email,
        profilepic: tempUser.profilepic,
        passwd: tempUser.passwd,
        street: tempUser.street,
        city: tempUser.city,
        state: tempUser.state,
        pincode: tempUser.pincode,
      },
    });

    await prisma.tempUser.delete({
      where: { email },
    });

    res.status(200).json({ success: true, message: 'Account verified successfully!' });

  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

