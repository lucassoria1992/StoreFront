
import UseGetItems from '../hooks/UseGetItems';
import ProductItem from '../Components/Producto';
import { Container, Row } from 'react-bootstrap';
import FormularioCarga from '../Components/Formulario';


const ProductItemsList = () => {
    const items = UseGetItems();

    return (
        <Container>
            <div>
            
                <Row md={3} className=" container d-flex align-items-center " >
                <FormularioCarga  style={{ Width: 'max-content' } }  className="m-5"/>
                    {items.map(item => (
                        <ProductItem key={item.id} item={item} style={{ Width: 'max-content' } }/>
                        
                    )
                    )
                    }
                </Row>
            </div>
        </Container>
    );
}

export default ProductItemsList;