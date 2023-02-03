import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navegation.css';
import Logo from '../../images/logo.png';

const Navegation=()=>{
    const categories=[
        {url:"/api_react/", name:"Inicio"},
        {url:'/list',name:"Personajes"}
    ];
    const activeStyle= {
        color:'#97ce4c',
    }
    return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Link to='/'>
            <Navbar.Brand><img src={Logo} alt='Logo rick and morty' className="logo"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-links">
          <Nav className="navbar-links">
            {
                categories.map(cat=>(
                    <NavLink to={cat.url} className="navbar-item" style={({ isActive }) => isActive ? activeStyle : undefined}>{cat.name}</NavLink>
                ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Navegation;