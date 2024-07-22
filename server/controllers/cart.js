import { prisma } from "../app.js"; // Imported prisma

const getcart = async (req, res) => {
    const cartItems = await prisma.cart.findMany({ // Changed to use Prisma
        where: { email: req.user.email },
        include: {
            product: true,
        },
    });

    return res.status(200).json({
        success: true,
        data: cartItems,
    });
};

const addcart = async (req, res) => {
    const { pId, price, size } = req.body;

    await prisma.cart.create({ // Changed to use Prisma
        data: {
            productId: pId,
            email: req.user.email,
            shoeSize:size,
            quantity: 1,
        },
    });

    return res.status(200).json({
        success: true,
        message: "Added to cart",
    });
};

export { getcart, addcart };
