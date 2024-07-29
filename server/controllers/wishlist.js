import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addToWishlist = async (req, res) => {
    const { productId } = req.body;
    const { email } = req.user;

    try {
        const existingWishlistItem = await prisma.wishlist.findUnique({
            where: {
                userId_productId: {
                    userId: email,
                    productId: productId,
                },
            },
        });

        if (existingWishlistItem) {
            await prisma.wishlist.delete({
                where: {
                    userId_productId: {
                        userId: email,
                        productId: productId,
                    },
                },
            });

            return res.status(200).json({
                success: true,
                message: "Product removed from wishlist.",
            });
        }


        await prisma.wishlist.create({
            data: {
                userId: email,
                productId: productId,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Product added to wishlist."
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getWishlist = async (req, res) => {
    const { email } = req.user;

    try {
        const wishlistItems = await prisma.wishlist.findMany({
            where: {
                userId: email,
            },
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

        return res.status(200).json({
            success: true,
            wishlist: wishlistItems,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export { addToWishlist, getWishlist };
