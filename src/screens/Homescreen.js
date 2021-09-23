import React, { useState, useEffect } from "react";
import axios from "axios";
import Teren from "../components/Teren";
function Homescreen() {
  const [tereni, settereni] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/tereni/getalltereni")).data;

      settereni(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          tereni.map((teren) => {
            return <div className="col-md-9">
              <Teren teren={teren}/>
            </div>
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
