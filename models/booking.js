const mongoose = require("mongoose");

const bookingSchema =mongoose.Schema({
teren:{

type:String, required:true

},
terenid:{
    type:String, required:true
},
userid:{
    type:String, required:true

},
stime:{
    type:Number, required:true

},
etime:{
    type:Number, required:true

},
totalhours:{
    type:Number, required:true

},
transactionId:{
    type:String, required:true
},
status:{
    type:String, required:true, default:'booked'

}
}, {
timestamps :true,

}
)


const bookingmodel= mongoose.model('bookings', bookingSchema);

module.exports=bookingmodel