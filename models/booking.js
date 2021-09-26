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
    type:String, required:true

},
etime:{
    type:String, required:true

},
totalhours:{
    type:String, required:true

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