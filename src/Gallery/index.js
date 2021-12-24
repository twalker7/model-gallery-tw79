import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div>
            <Row>
                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/4.jpeg`)} alt="jaga"/>
                </Col>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/3.jpeg`)} alt="jaga"/>
                </Col>
            </Row>

            <Row>
                <Col></Col>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/9.jpeg`)} alt="jaga"/>
                </Col>

                <Col></Col>
            </Row>
            
        </div>

    );

}

export default Gallery;