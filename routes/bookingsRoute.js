const express =require("express");
const router =express.Router();
const Booking=require("../models/booking")

router.post("/bookCourt", async(req,res)=> {

const {
    teren,
userid,
stime,
etime,
totalhours
}=req.body


try{
    const newbooking= new Booking({
teren:teren.name,
terenid:teren._id,
userid,
stime,
etime,
totalhours,
transactionId:'1234'
    })

    const booking =await newbooking.save()
res.send('Rezervacija uspješna')

}catch(error){
return res.status(400).json()}




});

module.exports=router