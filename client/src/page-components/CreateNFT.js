import React, {useState} from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import AccountNav from '../components/AccountNav'
import NFTForm from '../components/NFTForm'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useMoralis } from 'react-moralis'
const Background = styled.div`
    height: 100vh;
    width: 100%;
    background: hsla(346, 84%, 61%, 1);
    background: #111111
`;

const FormSection = styled.div `
    margin:0;
    position:absolute;
    top:50%;
    left:25%;
    -ms-transform: translate-Y(-35%);
    transform: translateY(-35%);
`;

function CreateNFT() {
    const {isAuthenticated, user} = useMoralis();

    return (
        <Background>
            <AccountNav />
            
            <FormSection>
                <Row>
                    <Col>
                        <NFTForm />
                    </Col>
                </Row>
            </FormSection>
        </Background>
    )
}

export default CreateNFT
