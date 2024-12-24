import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router';
import HeaderMenu from '../../JsonMenu/Header/HeaderJson.json';

function Header() {
    function HeaderMn({ item }) {
        return (
            <Link className='nav-link' to={item.link} >{item.label}</Link>
            
        )
    }
    function Headerdrowpdown({ item }) {
        return (
            <NavDropdown title={item.label} >
                {
                    // extecute map  method
                    item.dropdownMenu.map((item,index)=>{
                        return <Link className='dropdown-item' to={item.link} key={index}>{item.label}</Link>
                    })
                }

            </NavDropdown>

        )
    }
    return (
        <Navbar expand="md" className="bg-body-color">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={'./Images/logo.png'} alt="logo" className='img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {
                            //execute map method
                            HeaderMenu.map((item, index) => {
                                if(item.isDropdown == true)
                                {
                                 return <Headerdrowpdown  item={item} key={index}/>
                                }
                                else{

                                    return <HeaderMn  item={item} key={index} />
                                }
                                
                            })

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;