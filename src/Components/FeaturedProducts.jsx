import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from './ExampleCarouselImage';
import '../styles/FeaturedProducts.css'
export default function FeaturedProducts() {
  
    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                    <img src="" alt="Featured Product" className="featured-product-image" />
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
        </Container>
    )
}
