import React from "react";

function Teren({ teren }) {
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={teren.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h1>{teren.name}</h1>
        <b>
          <p>Sport: {teren.type}</p>
          <p>Vrsta terena: {teren.description}</p>
          <p>Cijena: {teren.price}</p>
          <p>Lokacija: {teren.information}</p>
        </b>

        <div style={{ float: "right" }}>
          <button className="btn btn-primary">Dodatne informacije</button>
        </div>
      </div>
    </div>
  );
}

export default Teren;
