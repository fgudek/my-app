import React, { useState, useEffect } from "react";
import axios from "axios";
import Teren from "../components/Teren";
import Loader from "../components/Loader";
import Error from "../components/Error";
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
    <div className="container">
      <div className="row justify-content-center mt-5 ">
        {loading ? (
          <Loader/>
        ) : tereni ? (
          tereni.map((teren) => {
            return (
              <div className="col-md-9 mt-3">
                <Teren teren={teren} />
              </div>
            );
          })
        ) : (
          <Error/>
        )}
      </div>
    </div>
  );
}

export default Homescreen;
