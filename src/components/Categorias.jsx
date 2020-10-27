import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Card, Image} from 'react-bootstrap';
import { dataCategorias} from "../data/DataCategorias.jsx";
import '../App.css';
import linea from '../images/linea_2.png'
import circulo_1 from '../images/circulo_1.png'
import flecha_izquierda from '../images/flecha_izquierda.png'

class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCategorias: dataCategorias}
  }

  render() {
    return  <Fragment >
        <Container fluid className="categorias">
         <Row>
            <Col xs={{span:10,offset: 1}} className="marco">
              <Row>
                <Col md={3}>
                  <Image src={circulo_1} alt="img-circulo" className="img-circulo-2 animate__animated animate__rotateIn mt-5" fluid />
                </Col>
                <Col md={{span:6}} className="text-center carta-head">
                  <p className="titulo-categorias animate__animated animate__zoomIn">
                    CATEGORÍAS
                  </p>
                  <Image src={linea} alt="img-circulo" className="animate__animated animate__fadeInLeft" fluid />
                </Col>
              </Row>
              <Row className="cartas justify-content-center">
                  {this.state.dataCategorias.map((data,i) => {
                    return <div key={data.categoria}>
                    <Col sm="12">
                        <Card className="carta animate__animated animate__flipInY animate__slow">
                          <Card.Header className="carta-titulo">{data.categoria}</Card.Header>
                          <Card.Body>
                          <Card.Img variant="top" src={`/rutamedellin/iconos/${data.imagen}_icono.png`} />
                          <Link to={"/rutamedellin/categoria/"+data.categoria}><button className="btn carta-btn">Ver proyectos</button></Link>
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

export default Categorias;
