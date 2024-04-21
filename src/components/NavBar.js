import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(null);

    const navigate = useNavigate()

    const logIn = () => {
        setisLoggedIn(true);
        toast.success("LoggedIn Successfully",{autoClose: 3000})
        navigate("/search");
    }
    const logOut = () => {
        setisLoggedIn(false);
        toast.success("Log out Successfully",{autoClose: 3000})
        navigate('/home')
    };
    return (
        <>
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>iSearch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>

                        </Nav>

                        {!isLoggedIn ? <form className="d-flex">
                            <button className="btn btn-primary" onClick={logIn}> Login </button>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <button className="btn btn-primary" onClick={logOut}> Logout </button>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <ToastContainer/>
        </>

    )
}

export default NavBar
