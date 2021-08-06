import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Products.css'
import p1 from '../../Images/p1.png'
import p2 from '../../Images/p2.png'

const Products = () => {
    const products = [{img: p1, id: 1}, {img: p2, id: 2}];

    return (
        <section className="products">
            <Container>
                <Row className="mx-auto">
                    {
                        products.map(({img, id}) => {
                            return(
                                <Col key={id} md={6}>
                                    <div className="productCard">
                                        <div className="pdInfo">
                                            <h3>Ready for autumn <br/> collection</h3>
                                            <p>Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                                            <button>Purchase Now</button>
                                        </div>
                                        <img src={img} alt="" />
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Products;