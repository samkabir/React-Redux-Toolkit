import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <Container>
                  <Wrapper>
                        <h2>Welcome to Online News Articles Blog!</h2>
                        <Link to="/discoverbooks">
                              <Button>Go to Discover Articles</Button>
                        </Link>
                  </Wrapper>
            </Container>
      );
};
const Wrapper = styled.div`
      text-align:center;
      padding: 100px 0px;
`;
const Button = styled.button`
      padding: 20px;
      font-size: 20px;
      background-color: #000035;
      border: none;
      color:white;
      &:hover{
            cursor: pointer;
            background-color: white;
            color: black;
            transition-delay: 0.1s;
            transition-duration: 0.3s;
            transition-timing-function: linear;
            border:1px solid #000035;
      }
`;

export default Home;