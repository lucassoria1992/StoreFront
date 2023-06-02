import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "../Styles/formCharger.css"

const API = process.env.REACT_APP_API_REST;

const FormularioCarga = () => {
  const form = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = form.current;
    try {
      const formData = new FormData(formElement);
      const data = {
        description: formData.get("description"),
        category: formData.get("category"),
        image: formData.get("image"),
        price: formData.get("price"),
        star: formData.get("star") === "true",
      };
      await axios.post(API, data)
    } catch (error) {
      console.error(error);
    }
  };


  return (

    <div className="d-flex justify-content-around align-content-center align-items-center m-5">

      <Form className="formbody" ref={form} >
        <Form.Text>Carga de Productos</Form.Text>
        <Form.Group className="mb-3  " controlId="formBasicCheckbox">
          <Form.Control
            className="inputFields inputselect "
            name="image"
            type="text"
            placeholder="Inserte URL de imagen"
            required

          />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="formBasicCheckbox">
          <Form.Control
            className="inputFields "
            name="price"
            type="number"
            placeholder="Precio"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="formBasicEmail">
          <Form.Control
            className="inputFields "
            name="category"
            type="text"
            placeholder="Nombre de Prodcuto"
            required

          />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="formBasicPassword">
          <Form.Control
            className="inputFields "
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

        <Form.Group className="mb-3  ">
          <Button
            variant="primary"
            type="submit"
            onClick={
              handleSubmit}
            className="buton"
          >
            Guardar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioCarga;
