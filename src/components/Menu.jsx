import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Button, Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <Navbar className="menu animate__animated animate__fadeInDown justify-content-end" expand="md" collapseOnSelect >
            <Nav>
            
                <Nav.Item>
                    <button className="btn btn-default btn-iniciar" onClick={()=>this.props.iniciar()}>Iniciar Ruta</button>                        
                </Nav.Item>
                <Nav.Item>
                    <button className="btn btn-default btn-iniciar" onClick={()=>this.props.iniciar()}>Login</button>                        
                </Nav.Item>
                <Nav.Item>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://ed.team">Comparte por facebook 
                <i class="fab fa-facebook"></i>
                </a>
                </Nav.Item>
            </Nav>
        </Navbar>

        
      )
    }
}


export default Menu;
