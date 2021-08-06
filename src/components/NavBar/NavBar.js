import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <section className="navBar d-flex justify-content-between">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Products <FontAwesomeIcon icon={faAngleDown}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Collection</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Gift</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Our magazine</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/"><FontAwesomeIcon icon={faSearch}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <button className="branBtn">Sign Up</button>
                </Nav.Item>
            </Nav>
        </section>
    );
};

export default NavBar;