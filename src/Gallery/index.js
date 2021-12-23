import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div>
            <Row>
                <Col>
                    <img src={require().default} alt=""></img>
                </Col>
                <Col>
                    <img src={require().default} alt=""></img>
                </Col>

            </Row>
            
        </div>

    );

}

export default Gallery;