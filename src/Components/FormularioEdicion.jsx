import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Modal, Nav } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import UseGetItems from "../hooks/UseGetItems"

const FormularioEdicion = ({ item }) => {
  const form = useRef(null);
  const [productId, setProductId] = useState("");
  const API = process.env.REACT_APP_API_REST;

  const handleSubmit = async (productId) => {
    try {
      const formData = new FormData(form.current);
      const data = {
        id: item.id,
        description: formData.get("description"),
        category: formData.get("category"),
        image: formData.get("image"),
        price: parseFloat(formData.get("price")),
        star: formData.get("star") === "true",
      };
      await axios.put(API + `/${productId}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  // Modal States
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditProduct = (productId) => {
    setProductId(productId);
    handleShow();
  };

  const deleteObject = async (productId) => {
    try {
      await axios.delete(API + `/${productId}`);
      console.log("Object deleted successfully");
    } catch (error) {
      console.error("Error deleting object:", error);
    }
  };

  return (
    <>
      <Nav.Link onClick={() => handleEditProduct(item.id)}>Editar Producto</Nav.Link>
      <Modal show={show} onHide={handleClose} key={uuidv4()}>
        <Modal.Header closeButton>
          <Modal.Title>Editar o Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Imagen</Form.Label>
              <Form.Control name="image" type="text" placeholder={item.image} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Precio</Form.Label>
              <Form.Control name="price" type="number" placeholder={item.price} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                type="text"
                placeholder={item.description}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                name="category"
                type="text"
                placeholder={item.category}
                required
              />
              <Form.Text className="text-muted">Ingrese la categoría del producto</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="star" type="checkbox" label="En Stock" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleClose();
              handleSubmit(item.id);
            }}
          >
            Guardar Producto
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleClose();
              deleteObject(productId);
            }}
          >
            Eliminar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioEdicion;