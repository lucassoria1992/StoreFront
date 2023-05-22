
import UseGetItems from '../hooks/UseGetItems';
import ProductItem from '../Components/Producto';
import { Container, Row } from 'react-bootstrap';


const ProductItemsList = () => {
    const items = UseGetItems();

    return (
        <Container>
            <div>
                <Row md={4} className=" container d-flex">
                    {items.map(item => (
                        <ProductItem key={item.id} item={item} />
                        
                    )
                    )
                    }
                </Row>
            </div>
        </Container>
    );
}

export default ProductItemsList;