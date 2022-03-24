import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Gallery(){
    return(
        
        <div className="gallery-component">



            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/4.jpeg`)} alt="jaga-buyan-catalogue model-duo"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/10.jpeg`)} alt="black-and-white-headshot"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/8.jpeg`)} alt="jaga-buyan-3-models"/>
                </Col>

            </Row>


            <Row>

                <Col> 
                    <img className="gallery-photos-type1" src={require(`../assets/3.jpeg`)} alt="jaga-buyan-3-models-2"/>
                </Col>
                
            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/12.jpeg`)} alt="aumahn-washing-kennethhahn"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/7.jpeg`)} alt="yoshi-kant-photography"/>
                </Col>

            </Row>
            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/6.jpeg`)} alt="aumahn-washington-photography"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/9.jpeg`)} alt="all-white-suit"/>
                </Col>

            </Row>
            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/14.jpeg`)} alt="aumahn-washing-kennethhahn"/>
                </Col>

            </Row>

            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/0.jpeg`)} alt="waikiki"/>
                </Col>

            </Row>


            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/11.jpeg`)} alt="air-bookcover"/>
                </Col>

            </Row>


            <Row>

                <Col>
                    <img className="gallery-photos-type1" src={require(`../assets/13.jpeg`)} alt="yoshi-kant-photoraphy"/>
                </Col>

            </Row>
                <br/>
            <Row>
                <Col>
                    <h3 style={{color: 'whitesmoke'}}> Thanks for visiting! </h3>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h5 style={{color: 'whitesmoke'}}> Back to top </h5>
                </Col>
            </Row>




            
        </div>

    );

}

export default Gallery;