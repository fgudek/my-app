import React, { useState, useEffect } from "react";
import axios from "axios";
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
    <div>
      {loading ? (<h1>Loading...</h1>): error ? (<h1>Erorr...</h1>) : (<div>

        <div className="row">
            <div class="col-md-5">
              <h1>{teren.name}</h1>
              <img src={teren.imageurls[0]} className='bigimg'/>

            </div>
            <div class="col-md-5">
              <h1>Detalji rezervacije</h1>
              <hr />
              
              <b>
              <p>Name: </p>
              <p>Date: </p>
              <p>Početak termina: </p>
              <p>Kraj termina: </p>   
              </b>    
            </div>

        </div>

      </div>)}
    </div>
  );
}

export default Reservationscreen;
