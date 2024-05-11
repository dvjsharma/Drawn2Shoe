import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import { con } from "../app.js";

const signup = async (req, res) => {
    const { name, email, ppic, passwd, street, city, state, pincode } = req.body;
    con.query(`SELECT * FROM mainuser WHERE email='${email}'`, async (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length != 0) {
            return res.status(404).json({
                success: false,
                message: "User already exists."
            });
        }
        const hpasswd = await bcrypt.hash(passwd, 10);
        con.query(`INSERT INTO mainuser VALUES ('${name}', '${email}', '${ppic}', '${hpasswd}', '${street}', '${city}', '${state}', ${pincode})`, (err, result) => {
            if (err) {
                throw err;
            }
            let user = con.query(`SELECT * FROM mainuser WHERE email='${email}'`, (err, result) => {
                if (err) {
                    throw err;
                }
                sendCookie(result[0]["email"], res, "Registered Successfully", 201);
            })
        });
    })
}

const login = async (req, res) => {
    const { email, passwd } = req.body;
    con.query(`SELECT * FROM mainuser WHERE email='${email}'`, async (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email."
            });
        }
        const isMatch = await bcrypt.compare(passwd, result[0]["passwd"]);
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Invalid Password."
            });
        }
        sendCookie(result[0]["email"], res, `Welcome back, ${result[0]['name']}`, 200);
    });


}

const getMyProfile = (req, res) => {
    res.status(200).json({
        message: "Success",
        user: req.user,
    });
}

const registerdesigner = (req, res) => {
    const { description, portfoliolink } = req.body;
    con.query(`SELECT * FROM designer WHERE email='${req.user["email"]}'`, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length != 0) {
            return res.status(404).json({
                success: false,
                message: "Designer already exists."
            });
        }
        con.query(`INSERT INTO designer VALUES ('${req.user["email"]}', '${description}', '${portfoliolink}')`, (err, result) => {
            if (err) {
                throw err;
            }
            return res.status(200).json({
                success: true,
                message: "Registered Designer"
            });
        })
    })
}

const registerretailer = (req, res) => {
    const { shopname, contactno, shopaddr, shopcity, shoppin } = req.body;
    con.query(`INSERT INTO retailer VALUES ('${req.user["email"]}', '${shopname}', ${contactno}, '${shopaddr}', '${shopcity}', ${shoppin})`, (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
            success: true,
            message: "Registered Retailer"
        })
    });
}



export { login, signup, getMyProfile, registerdesigner, registerretailer };