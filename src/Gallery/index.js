import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div>
            <Row>
                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/4.jpeg`)} alt="model-duo"/>
                </Col>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/3.jpeg`)} alt="featured-models"/>
                </Col>
            </Row>

            <Row>
                <Col></Col>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/7.jpeg`)} alt="all-white"/>
                </Col>

                <Col></Col>
            </Row>

            <Row>
                <Col> 
                <img className="gallery-photos-type1" src={require(`../assets/9.jpeg`)} alt="yoshi"/>

                </Col>

                <Col>
                <img className="gallery-photos-type1" src={require(`../assets/6.jpeg`)} alt="jaga"/>

                </Col>
            </Row>
            
        </div>

    );

}

export default Gallery;