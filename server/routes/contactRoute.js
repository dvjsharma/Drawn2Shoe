const express = require("express");
const { sendEmail } = require("../controllers/contactController");

const router = express.Router();

router.post("/send-email", sendEmail);

module.exports = router;
