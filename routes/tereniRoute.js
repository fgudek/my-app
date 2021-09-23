const express = require("express");
const router = express.Router();

const Teren = require('../models/teren')

router.get("/getalltereni", async(req,res) => {

    try {
        const tereni = await Teren.find({})
        res.send(tereni)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

module.exports = router;