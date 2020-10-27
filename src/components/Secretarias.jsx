import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Card, Image} from 'react-bootstrap';
import { dataSecretarias } from "../data/DataSecretarias.jsx";
import '../App.css';
import linea from '../images/linea_2.png'
import circulo_1 from '../images/circulo_1.png'
import flecha_izquierda from '../images/flecha_izquierda.png'
class Secretarias extends React.Component {
  constructor() {
    super();
    this.state = { dataSecretarias: dataSecretarias}
  }

  render() {
    return  <Fragment >
        <Container fluid className="secretarias">
         <Row>
            <Col xs={{span:10,offset: 1}} className="marco">
              <Row>
                <Col md={3}>
                  <Image src={circulo_1} alt="img-circulo" className="img-circulo-2 animate__animated animate__rotateIn mt-5" fluid />
                </Col>
                <Col md={{span:6}} className="text-center carta-head">
                  <p className="titulo-categorias animate__animated animate__zoomIn">
                    SECRETARÍAS
                  </p>
                  <Image src={linea} alt="img-circulo" className="animate__animated animate__fadeInLeft" fluid />
                </Col>
              </Row>
              <Row className="cartas justify-content-center">
                  {this.state.dataSecretarias.map((data,i) => {
                    return <div key={data.secretaria}>
                    <Col sm="12">
                        <Card className="carta animate__animated animate__flipInY animate__slow">
                          <Card.Header className="carta-titulo">{data.secretaria}</Card.Header>
                          <Card.Body>
                          <Card.Img variant="top" src={`/rutamedellin/iconos/${data.imagen}_icono.png`} />
                          <Link to={"/rutamedellin/secretaria/"+data.secretaria}><button className="btn carta-btn">Ver proyectos</button></Link>
                          </Card.Body>
                      </Card>
                    </Col>
                  </div>
                  })}
              </Row>
              <Row className="justify-content-center">
                <Link to={"/rutamedellin"}><Image src={flecha_izquierda} alt="img-flecha" className="img-flecha-izquierda animate__animated animate__rotateIn" fluid /></Link>
              </Row>
            </Col>
          </Row>
        </Container>
    </Fragment>
  }
}

export default Secretarias;
