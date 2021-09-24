import React , {useState} from "react";
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Teren({teren}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          
        </b>

        <div style={{ float: "right" }}>
          <Link to={`/reservation/${teren._id}`}>
            <button className='btn btn primary m-2'>
              Rezerviraj sada
            </button>
          </Link>
          <button className="btn btn-primary"onClick={handleShow}>Dodatne informacije</button>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{teren.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={teren.imageurls[1]} className="bigimg" />
          <p>Nazvati na: {teren.phonenumber}</p>
          <p>Lokacija: {teren.information}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Teren;
