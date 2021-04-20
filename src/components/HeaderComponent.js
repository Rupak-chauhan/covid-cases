import React from 'react';
import '../App.css';
import ContactUsComponent from './ContactUs/ContactUs';
import SymptomComponent from './Symptoms/Symptoms';
import CountryList from './CountryList/CountryList';
import { Route } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
 
function HeaderComponent() {
  const greeting = 'Hello Function Component!';
 
  return (
      <div>
          <Navbar color="warning" light expand="md">
          
        <NavbarBrand href="/" className="back1"><img src={require('./covi.jpg')} width="60px"/></NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Symptoms">Symtops and Preventions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactUs">Contact us</NavLink>
            </NavItem>
            
            
          </Nav>
          <NavbarText>Stay-Safe</NavbarText>
        
      </Navbar>
      <Route path='/ContactUs' component={ ContactUsComponent} /> 
      <Route path='/Symptoms'  component={ SymptomComponent } />
      
      </div>
  );
}
 
export default HeaderComponent;