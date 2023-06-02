import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import FormularioEdicion from './FormularioEdicion';


const ProductItem = ({ item }) => {

        return (
            <CardGroup style={{height: "max-content"}}>
                <Card className='m-2' style={{height: "max-content"}}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <FormularioEdicion item={item} />
                    </Card.Footer>
                </Card>
            </CardGroup>
        );
        }



export default ProductItem; 