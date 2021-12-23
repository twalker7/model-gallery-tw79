import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div>
            <Row>
                <Col>
                    <img src={require(`../assets/4.jpeg`)} alt="jaga"/>
                </Col>
                <Col>
                    
                </Col>

            </Row>
            
        </div>

    );

}

export default Gallery;