import React, { useState } from 'react';
import Menu from './Menu.jsx';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Card, Image} from 'react-bootstrap';
import '../App.css';
import logo from '../images/logo.png'
import circulo_1 from '../images/circulo_1.png'
import bus from '../images/bus.png'
import linea from '../images/linea.png'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
    this.iniciarClick = this.iniciarClick.bind(this)
    this.cambiarComponente = this.cambiarComponente.bind(this)
    this.animateCSS = this.animateCSS.bind(this)
  }

  

  cambiarComponente(){
     //Elementos a esconder
     this.animateCSS('.img-circulo-2', 'zoomOut','esconder');
     this.animateCSS('.texto-medellin', 'slideOutLeft','esconder');
     this.animateCSS('.texto-cuida', 'slideOutRight','esconder');
     this.animateCSS('.btn-categorias', 'slideOutDown','esconder');
     this.animateCSS('.btn-ppp', 'slideOutDown', 'cambiar');
  }

  animateCSS(element, animation, queHacer ,prefix = 'animate__'){
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
      node.classList.add(`${prefix}animated`, animationName);
      function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        switch(queHacer){
          case 'esconder': node.classList.add('d-none')
            break;
          case 'cambiar': 
            if(element == '.img-linea'){
              document.querySelector('.home').classList.add('d-none');
              document.querySelector('.inicio-ruta').classList.remove('d-none');
            }
            if(element == '.btn-ppp'){
              document.querySelector('.cargar').click();
            }
            break;
        }
      }
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
  }

    iniciarClick(){
      //Elementos a esconder
      this.animateCSS('.img-circulo-1', 'zoomOut','esconder');
      this.animateCSS('.img-logo', 'zoomOutLeft','esconder');
      this.animateCSS('.mensaje', 'slideOutRight','esconder');
      this.animateCSS('.img-bus', 'slideOutRight','esconder');
      this.animateCSS('.img-linea', 'slideOutDown','cambiar');
      //Elementos a mostrar
      this.animateCSS('.texto-medellin', 'slow');
      this.animateCSS('.texto-medellin', 'slideInLeft');
      this.animateCSS('.texto-cuida', 'slow');
      this.animateCSS('.texto-cuida', 'slideInRight');
      this.animateCSS('.btn-categorias', 'slow');
      this.animateCSS('.btn-categorias', 'flipInX');
      this.animateCSS('.btn-ppp', 'slow');
      this.animateCSS('.btn-ppp', 'flipInX');
      this.animateCSS('.marco', 'zoomIn');
    }  

  render() {
    return (<div>
        <Container fluid className="home"> <br/>
          <Menu iniciar={()=>this.iniciarClick()} />
          <Row>
            <Col md={{span: 5, offset: 1}}>
              <Image src={circulo_1} alt="img-circulo" className="img-circulo-1 animate__animated animate__rotateIn" fluid />
              <Image src={logo} alt="img-logo" className="img-logo animate__animated animate__zoomInLeft" fluid />
            </Col>
            <Col md={{span: 6}}>
              <Col md={{span:8, offset: 2}}>
                <Card className="mensaje animate__animated animate__fadeInDown">
                  <Card.Header>Hola </Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Bienvenido a la ruta Medellín cuida lo público. Donde todos cuidamos lo público.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={{span: 8, offset:1}}>
                <Image src={bus} alt="img-bus" className="offset-5 img-bus animate__animated animate__slideInRight" fluid/>
              </Col>
            </Col>
          </Row>
          <Row>
              <Image src={linea} alt="img-linea" id="linea-1" className="img-linea animate__animated animate__slideInLeft" fluid/>
          </Row>
        </Container>
        <Container fluid className="inicio-ruta d-none">
          <Row>
            <Col xs={{span:10,offset: 1}} className="marco">
              <Row>
                <Col md={{span:5,offset:1}} className="text-center">
                  <Image src={circulo_1} alt="img-circulo" className="img-circulo-2 animate__animated animate__rotateIn" fluid />
                  <p className="texto-medellin">Medellín</p>
                </Col>
              </Row>
              <Row>
                <Col md={{span:8,offset:4}} className="text-center">
                  <p className="texto-cuida">cuida lo público</p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={{span:4,offset:2}}>
                <Link to='/rutamedellin/categorias'><button className="btn btn-categorias">Categorías</button></Link>
                </Col>
                <Col md={4}>
                <Link to='/rutamedellin/secretarias' ><button className="btn btn-ppp">Presupuesto participativo</button></Link>
                </Col>
              </Row>
              <Row>
              <Col >
              <br></br>              
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                  <h4>El Plan Anual de Adquisiciones es una herramienta de planeación que permite a las 
                                            Entidades Estatales indistintamente de su régimen de contratación, facilitar, identificar, 
                                            registrar, programar y divulgar sus necesidades de bienes, obras y servicios; y al Estado a 
                                            través de Colombia Compra Eficiente,   diseñar estrategias de contratación basadas en agregación 
                                            de la demanda que permitan incrementar la eficiencia del  proceso de contratación. 
                                            El PAA también permite a los proveedores potenciales conocer las compras que las diferentes Entidades
                                          Estatales planean, realizan y que  corresponden a temas de su interés. </h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>);
  }
}

export default Home;
