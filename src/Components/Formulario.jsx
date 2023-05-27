import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Modal, Nav } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ProductItemsList from "../Conteiners/Productos";
const API = process.env.REACT_APP_API_REST;
const FormularioCarga = () => {
  const form = useRef(null);
  
  const handleSubmit = async () => {
    try {
      const formData = new FormData(form.current);
      const data = {
        description: formData.get("description"),
        category: formData.get("category"),
        image: formData.get("image"),
        price: formData.get("price"),
        star: formData.get("star") === "true",
      };
      await axios.post(API , data);
    } catch (error) {
      console.error(error);
    }
  };

  //ModalStates
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav.Link onClick={handleShow}>Agregar Producto</Nav.Link>
      <Modal show={show} onHide={handleClose} key={uuidv4()}>
        <Modal.Header closeButton>
          <Modal.Title>Infomacion de Producto </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Inserte URL de image"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Precio"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripcion del producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                type="text"
                placeholder="description"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                name="category"
                type="text"
                placeholder="Nombre de Producto"
                required
              />
              <Form.Text className="text-muted">
                Categoria de Producto
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="star" type="checkbox" label="En Stock" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleClose();
              handleSubmit();
              
            }}
          >
            Cargar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioCarga;
