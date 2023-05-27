import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import FormularioEdicion from './FormularioEdicion';

const ProductItem = ({ item }) => {

    // const EliminarProducto = async (id) => {
    //     try {
    //       await axios.delete(`https://localhost:7055/api/objects/${id}`);
    //       console.log("Object deleted successfully");
    //     } catch (error) {
    //       console.error("Error deleting object:", error);
    //     }
    //   };

        return (
            <CardGroup>
                <Card className='m-2'>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <FormularioEdicion item = {item} />
                    </Card.Footer>
                </Card>
            </CardGroup>
        );
        }



export default ProductItem; 