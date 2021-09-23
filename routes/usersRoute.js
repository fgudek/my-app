const express = require("express");
const { useState } = require("react");
const router = express.Router();
const User = require("../models/user")



router.post("/register", async (req, res) => {
    const newuser = new User({ name: req.body.name, email: req.body.email, password: req.body.password })

    try {

        const newuser = await newuser.save()
        res.send('Registracija uspješna')
    } catch (error) {
        return res.status(400).json({ erorr })

    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findone({ email: email, password: password })
        if (user) {
            res.send(user)
        }
        else {
            return res.status(400).json({ message: 'Prijava neuspješna' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});
module.exports=router