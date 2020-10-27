import React, {Fragment } from 'react';
import {Container, Row, Col, Button, Card, Modal, Image, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PPxSecretarias } from "../data/DataSecretarias.jsx";
import '../App.css';
import circulo_1 from '../images/circulo_1.png'
import linea from '../images/linea_2.png'
import flecha_izquierda from '../images/flecha_izquierda.png'

class Secretaria extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      nombreSecretaria:this.props.match.params.id, 
      dataSecretarias: PPxSecretarias,
      modal: false,
      secretaria: '',
      etapa: '',
      objeto: '',
      valor: '',
      categoria:''
  }
  this.mostrarModal = this.mostrarModal.bind(this);
  }

  mostrarModal(id){
      let proyecto = this.state.dataSecretarias[id]
      this.setState({
          modal:true,
          categoria: proyecto.categoria,
          etapa: proyecto.etapa,
          objeto: proyecto.objeto,
          valor: proyecto.valor
      })
  }
  render() {
    return   <Fragment >
        <Container fluid className="secretaria">
         <Row>
            <Col xs={{span:10,offset: 1}} className="marco">
              <Row>
                <Col md={3}>
                    <Image src={circulo_1} alt="img-circulo" className="img-circulo-2 animate__animated animate__rotateIn mt-5" fluid />
                </Col>
                <Col md={{span:6}} className="text-center carta-head">
                  <p className="titulo-categoria animate__animated animate__zoomIn">
                    {this.state.nombreSecretaria}
                  </p>
                  <Image src={linea} alt="img-circulo" className="animate__animated animate__fadeInLeft" fluid />
                </Col>
              </Row>
              <Row className="cartas justify-content-center">
              {this.state.dataSecretarias.map((proyecto,i) => {
                    if(proyecto.secretaria == this.state.nombreSecretaria){
                        return <div  key={i}>
                            <Col sm="12">
                                <Card className="carta animate__animated animate__flipInY animate__slow">
                                <Card.Body>
                                    {/* <Card.Title>Contrato - {i+1}</Card.Title> */}
                                    <Card.Text>
                                        {proyecto.objeto.substr(0,50)} ...
                                    </Card.Text>
                                    <button className="btn carta-btn" onClick={()=>this.mostrarModal(i)}>Ver</button>
                                </Card.Body>
                            </Card>
                            </Col>
                        </div>
                    }
                })}
              </Row>
              <Row className="justify-content-center">
                <Link to={"/rutamedellin/secretarias/"}><Image src={flecha_izquierda} alt="img-flecha" className="img-flecha-izquierda animate__animated animate__rotateIn" fluid /></Link>
              </Row>
            </Col>
          </Row>
        </Container>
        <Modal show={this.state.modal} onHide={()=>this.setState({modal:false})}>
            <Modal.Body>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td><b>Categoría</b></td>
                            <td><span id="secretaria">{this.state.categoria}</span></td>
                        </tr>
                        <tr>
                            <td><b>Etapa Actual</b></td>
                            <td><span id="etapa">{this.state.etapa}</span></td>
                        </tr>
                        <tr>
                            <td><b>Objeto:</b></td>
                            <td><span id="objeto">{this.state.objeto}</span>></td>
                        </tr>
                        <tr>
                            <td><b>Valor Necesidad:</b></td>
                            <td><span id="valor">{this.state.valor}</span></td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn carta-btn" onClick={()=>this.setState({modal:false})}>Cerrar</button>
            </Modal.Footer>
        </Modal>
  </Fragment>
  }
}

export default Secretaria;
