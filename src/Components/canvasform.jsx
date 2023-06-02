import React from 'react'
import { useState } from "react";
import { Button, Offcanvas } from 'react-bootstrap';
import FormularioCarga from "./Formulario";

const CanvasForm = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2">
        Cargar de Productos
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='   bg-dark text-light' >
          <Offcanvas.Title>Carga de Productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Container fondo d-flex justify-content-around align-content-center '>
          <FormularioCarga />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CanvasForm;