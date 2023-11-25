import { con } from "../app.js";

const getcart = (req, res) => {
    con.query(`select * FROM cart NATURAL JOIN product NATURAL JOIN shoe WHERE email='${req.user["email"]}'`, (err, result) => {
        if (err){
            throw err;
        }
        return res.status(200).json({
            success: true,
            data: result
        })
    });
}


export {getcart};