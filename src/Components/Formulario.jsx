import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import axios from "axios";
import "../Styles/formCharger.css"

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
      await axios.post("https://test--earnest-beijinho-b043d8.netlify.app/api/products", data);
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
      <Nav.Link onClick={handleShow} className="me-2">
        Cargar Productos
      </Nav.Link >
      <Offcanvas show={show} onHide={handleClose} className="fondo justify-content-around" >
          <Form ref={form} className="formbody">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                className="inputFields"
                name="image"
                type="text"
                placeholder="Inserte URL de imagen"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                className="inputFields"
                name="price"
                type="number"
                placeholder="Precio"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="inputFields"
                name="category"
                type="text"
                placeholder="Nombre de Prodcuto"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="inputFields"
                as="textarea"
                rows={4}
                name="description"
                type="text"
                placeholder="description"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="star" type="checkbox" label="En Stock" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
                className="buton"
              >
                Guardar
              </Button>
              <Button variant="secondary" onClick={handleClose} className="buton">
                Close
              </Button>
            </Form.Group>
          </Form>
      </Offcanvas>
    </>
  );
};

export default FormularioCarga;
