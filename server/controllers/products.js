import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getproducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            select: {
                shoeId: true,
                productId: true,
                shoe: {
                    select: {
                        shoename: true,
                        supplier: {
                            select: {
                                supplierName: true
                            }
                        },
                        price: true,
                        shoeImage: true
                    }
                },
            }
        });

        const result = products.map(product => ({
            categoryId: product.shoeId,
            pId: product.productId,
            shoeName: product.shoe.shoename,
            brand: product.shoe.supplier.supplierName,
            price: product.shoe.price,
            shoeImage: product.shoe.shoeImage
        }));

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getproductbyid = async (req, res) => {
    const { productId } = req.body;

    try {
        const product = await prisma.product.findUnique({
            where: { productId },
            select: {
                shoeId: true,
                productId: true,
                shoe: {
                    select: {
                        shoename: true,
                        supplier: {
                            select: {
                                supplierName: true
                            }
                        },
                        price: true,
                        shoeImage: true
                    }
                },
            }
        });

        const result = {
            categoryId: product.shoeId,
            pId: product.productId,
            shoeName: product.shoe.shoename,
            brand: product.shoe.supplier.supplierName,
            price: product.shoe.price,
            shoeImage: product.shoe.shoeImage
        };

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getcategories = async (req, res) => {
    try {
        const categories = await prisma.shoe.findMany({
            include: {
                supplier: true
            }
        });

        const result = categories.map(category => ({
            categoryId: category.shoeId,
            shoename: category.shoename,
            brand: category.supplier.supplierName,
            shoeImage: category.shoeImage
        }));

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const createcustomproduct = async (req, res) => {
    const { description, image, shoeModel, shoeSize, userId } = req.body;

    try {
        await prisma.design.create({
            data: {
                description,
                image,
                shoeModel, 
                shoeSize:parseInt(shoeSize),  
                userId,    
            },
        });

        return res.status(200).json({
            success: true,
            message: "Custom design created"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export { getproducts, getcategories, getproductbyid, createcustomproduct };
