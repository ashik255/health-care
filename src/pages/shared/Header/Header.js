import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
// import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,LogOut} = useAuth();
    return (
        <>
            <Navbar style={{backgroundColor:'#e6e6ff',color:''}} collapseOnSelect expand="lg"  bg="secondar" variant="dark" sticky="top">
                <Container>
                   <div>
                   <img style ={{width:'40px', height:'40px', 'border-radius' :'50%'}}  src={logo} alt="" />
                   </div>
                    {/* <Navbar.Brand  style ={{width:'80px', height:'80px'}}   href="#home" ><img src= {logo} alt="" /></Navbar.Brand> */}

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    {user?.email?
                        <Button className='bg-info rounded-2 border-0 p-2 ms-2 ' onClick= {LogOut} variant="success">Logout</Button>:
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                        <Navbar.Text className='m-2 text-success'>
                              Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;