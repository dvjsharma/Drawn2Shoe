import { con } from "../app.js";

getproducts = (req, res) => {
    con.query(`select P.shoeId as categoryId, productId as pId, S.shoename as shoeName, S1.supplierName as brand, price, P.productImage as shoeImage from product P natural join shoe S natural join supplier S1`, (err, result) => {
        if (err){
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        })
    });
}

getcategories = (req, res) => {
    con.query(`select S1.shoeId as categoryId, S1.shoename, S2.supplierName as brand, S1.shoeImage from shoe S1 NATURAL JOIN supplier S2`, (err, result) => {
        if (err){
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        });
    })
}

export {getproducts, getcategories};