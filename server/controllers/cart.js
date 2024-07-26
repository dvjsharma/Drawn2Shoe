import { prisma } from "../app.js"; // Imported prisma

const getcart = async (req, res) => {
    try {
        const cartItems = await prisma.cart.findMany({
            where: { email: req.user.email },
            include: {
                product: {
                    include: {
                        shoe: {
                            select: {
                                shoename: true,
                                supplier: {
                                    select: {
                                        supplierName: true,
                                    },
                                },
                                price: true,
                                shoeImage: true,
                            },
                        },
                    },
                },
            },
        });

        const result = cartItems.map(cartItem => ({
            productId: cartItem.productId,
            email: cartItem.email,
            shoeSize: cartItem.shoeSize,
            quantity: cartItem.quantity,
            product: {
                productId: cartItem.product.productId,
                shoeId: cartItem.product.shoeId,
                designId: cartItem.product.designId,
                category: cartItem.product.category,
                productImage: cartItem.product.productImage,
                shoename: cartItem.product.shoe.shoename,
                supplierName: cartItem.product.shoe.supplier.supplierName,
                price: cartItem.product.shoe.price,
                shoeImage: cartItem.product.shoe.shoeImage,
            },
        }));

        return res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error("Error fetching cart data:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
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


// add more quantity of items

const increaseQuantity = async (req, res) => {
    const { productId } = req.params;
    const { email } = req.body;

    try {
        const cartItem = await prisma.cart.findUnique({
            where: { productId_email: { productId: parseInt(productId), email } }
        });

        if (cartItem) {
            await prisma.cart.update({
                where: { productId_email: { productId: parseInt(productId), email } },
                data: { quantity: cartItem.quantity + 1 }
            });

            return res.status(200).json({ success: true, message: "Quantity increased" });
        } else {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// decrease Quantity of items
const decreaseQuantity = async (req, res) => {
    const { productId } = req.params;
    const { email } = req.body;

    try {
        const cartItem = await prisma.cart.findUnique({
            where: { productId_email: { productId: parseInt(productId), email } }
        });

        if (cartItem) {
            if (cartItem.quantity > 1) {
                await prisma.cart.update({
                    where: { productId_email: { productId: parseInt(productId), email } },
                    data: { quantity: cartItem.quantity - 1 }
                });

                return res.status(200).json({ success: true, message: "Quantity decreased" });
            } else {
                return res.status(400).json({ success: false, message: "Quantity cannot be less than 1" });
            }
        } else {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

//  to Remove Item from the cart
const removeItem = async (req, res) => {
    const { productId } = req.params;
    const { email } = req.body;

    try {
        await prisma.cart.delete({
            where: { productId_email: { productId: parseInt(productId), email} }
        });

        return res.status(200).json({ success: true, message: "Item removed" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
export { getcart, addcart,increaseQuantity, decreaseQuantity, removeItem };
