import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
// import Loader from "react-spinners/PropagateLoader";

function Reservationscreen({match}) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [teren, setteren] = useState();
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

  return (
    <div className='m-5'>
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
              <p>Date: </p>
              <p>Početak termina: </p>
              <p>Kraj termina: </p>   
              </b>
              </div>
              
              <div style={{textAlign:'right'}}>
                <b>
                <h1>Iznos</h1>
                <hr />
                <p>Ukupno sati : </p>
                <p>Cijena/h : {teren.price}</p>
                <p>Ukupna cijena : </p>
                </b>              
              </div>
              
              <div style={{float:'right'}}> 
                
                <button className="btn btn-primary">Placanje </button>

              </div>
              
            </div>

        </div>

      </div>) : (<Error/>)}
    </div>
  );
}

export default Reservationscreen;
