import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Navigate } from "react-router-dom";

const MainWrapper=styled.div`
    padding-top:40px;
`;

const WelcomePage=({loading,error,...props})=>{

    const logIn=()=>{
        return < Navigate to='http:/localhost:8080/login' />
    }

    return (
        <Container>
            <MainWrapper>
                <h4>Welcome</h4>
                <a href="http:/localhost:8080/login">Login</a>

                <Button style={{marginTop:'5px'}} onClick={() =>logIn()}>Login</Button>
            </MainWrapper>
        </Container>
    )
}

export default WelcomePage;