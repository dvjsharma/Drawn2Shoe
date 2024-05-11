import { con } from "../app.js";

const getproducts = (req, res) => {
    con.query(`select P.shoeId as categoryId, productId as pId, S.shoename as shoeName, S1.supplierName as brand, price, P.productImage as shoeImage from product P natural join shoe S natural join supplier S1`, (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        })
    });
}

const getproductbyid = (req, res) => {
    const { productId } = req.body;
    con.query(`select P.shoeId as categoryId, productId as pId, S.shoename as shoeName, S1.supplierName as brand, price, P.productImage as shoeImage from product P natural join shoe S natural join supplier S1 WHERE productId ='${productId}' `, (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        })
    });
}

const getcategories = (req, res) => {
    con.query(`select S1.shoeId as categoryId, S1.shoename, S2.supplierName as brand, S1.shoeImage from shoe S1 NATURAL JOIN supplier S2`, (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        });
    })
}

const createcustomproduct = (req, res) => {
    const { description, image } = req.body;
    con.query(`INSERT INTO design (description, image) VALUES ('${description}', '${image}') `, (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
            success: true,
            message: "Custom design created"
        });
    })
}

export { getproducts, getcategories, getproductbyid, createcustomproduct };