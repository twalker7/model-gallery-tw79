import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div className="gallery-component">

            <Row>

            <Col>
                <img className="gallery-photos-type1" src={require(`../assets/4.jpeg`)} alt="waikiki-suite"/>
            </Col>

            </Row>
            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/10.jpeg`)} alt="jaga-buyan-catalogue model-duo"/>
                </Col>

            </Row>
            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/9.jpeg`)} alt="jaga-buyan-all-white"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/8.jpeg`)} alt="jaga-buyan"/>
                </Col>

            </Row>

            <Row>

                <Col> 
                    <img className="gallery-photos-type1" src={require(`../assets/3.jpeg`)} alt="jaga-buyan-catalog-2"/>
                </Col>
                
            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/7.jpeg`)} alt="jaga-buyan-catalog-3"/>
                </Col>

            </Row>
            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/6.jpeg`)} alt="yoshi-kant-photography"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/0.jpeg`)} alt="aumahn-washington-photography"/>
                </Col>

            </Row>





            
        </div>

    );

}

export default Gallery;