import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from 'moment'
// import Loader from "react-spinners/PropagateLoader";
import StripeCheckout from 'react-stripe-checkout';


function Reservationscreen({match}) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [teren, setteren] = useState();

  const terenid = match.params.terenid
  const stime = moment(match.params.stime, 'HH:mm')
  const etime = moment(match.params.etime, 'HH:mm')

  const totalhours = moment.duration(etime.diff(stime)).asHours()

  useEffect(async() => {
    try {
      setloading(true);
      const data = (await axios.post("/api/tereni/getterenbyid", {terenid : match.params.terenid})).data;

      setteren(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

async function bookCourt(){
const bookingDetails = {
teren,
user: JSON.parse(localStorage.getItem('currentUser'))

}


}






function onToken(token){




  
  console.log(token)
}





  return (
    <div className="m-55" >
      {loading ? (<Loader/>): teren ? (<div>

        <div className="row justify-content-center mt-5 bs">
            <div class="col-md-5">




              <h1>{teren.name}</h1>
              <img src={teren.imageurls[1]} className='bigimg'/>

            </div>






            <div class="col-md-6">
              <div style={{textAlign:'right'}}>
              <h1>Detalji rezervacije</h1>
              <hr />
              
              <b>
              <p>Name: </p>
              <p>Date:  </p>
              <p>Početak termina: {match.params.stime} </p>
              <p>Kraj termina: {match.params.etime} </p>   
              </b>
              </div>
              
              <div style={{textAlign:'right'}}>
                <b>
                <h1>Iznos</h1>
                <hr />
                <p>Ukupno sati : {totalhours}</p>
                <p>Cijena/h : {teren.price}</p>
                <p>Ukupna cijena : {totalhours*teren.price} kn</p>
                </b>              
              </div>
              
              <div style={{float:'right'}}> 
                

                <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51JdfXJCebNsEqN290W7Qu9LCqgrdFjDDLR73xowhjHxUj2d8rEwnKduhemRAhbiohYN3PjKmr4gixybBwACWBqM4004YE9mtvo">
       
      
      <button className="btn btn-primary" onClick={bookCourt}>Placanje {""} </button>

     </StripeCheckout>
          
          

              </div>
              
            </div>

        </div>

      </div>) : (<Error/>)}
    </div>
  );
}

export default Reservationscreen;
