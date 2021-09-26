const express = require("express");
const { default: Stripe } = require("stripe");
const router =express.Router();
const Booking=require("../models/booking")

router.post("/reservation", async(req,res)=> {

const {
    teren,
userid,
stime,
etime,
totalhours,
token
}=req.body



try{

const custumer=await stripe.customer.create({
    email:token.email,
    source:token.id,
    
 } )




}catch (error){

}




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