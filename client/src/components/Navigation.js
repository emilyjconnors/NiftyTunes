import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router'
import styled from 'styled-components'
import {useMoralis} from 'react-moralis'

import ConnectButton from './ConnectButton'
import Logo from '../assets/images/NT_White_Isotype.png'

const NavFormat = styled.div `
    font-weight : 200;
`;

function Navigation() {
    const {isAuthenticated, user} = useMoralis();

    let navigate = useNavigate();

    useEffect(() => {
        if(!user) return null;
    }, [user]);

    return (
            <Navbar bg='dark' expand="lg">
                <Container>   
                <Navbar.Brand className="text-light" style={{fontSize: '40px'}} href="#" onClick={()=> navigate('/')}>
                    NftyTunes
                    </Navbar.Brand> 
                        <NavFormat>  
                        <Navbar.Collapse className='ms-5'>
                            <Nav.Link className="text-light" href="#action2" style={{fontWeight:"500"}}>Individuals</Nav.Link>
                            <Nav.Link className="text-light" href="#action3" style={{fontWeight:"500"}}>Creators</Nav.Link>
                            <Nav.Link className="text-secondary" style={{fontWeight:"500"}} onClick={()=> navigate('/marketplace')}>Explore</Nav.Link>
                            {user?
                                (
                                <>
                                <Nav.Link className="text-primary" style={{fontWeight:"500"}} onClick={()=> navigate('/createnft')}>NFT builder</Nav.Link>
                                <Nav.Link className="text-light" style={{fontWeight:"500"}} onClick={()=> navigate('/profile')}>My profile</Nav.Link>
                                </>
                                ):
                                (<></>)
                            }
                            </Navbar.Collapse>
                            </NavFormat>
                                
                                <Navbar.Collapse className='justify-content-end'>
                                        <ConnectButton />
                                
                                </Navbar.Collapse>
                    </Container>
            </Navbar>
    )
}

export default Navigation
