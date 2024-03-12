import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
    background:purple;
    border-radius: 10px;
    border: 2px solid  #000
    color: #f00;
    margin: 0 .5em;
    padding: 10px 20px;
    font-size: 30px;
`

const Container=styled.div`
    width: 300px;
    height: 200px;
    margin: 50px auto;
    padding: 20px 50px;
    border: 5px solid #ddd;
`

const Counter = () => {
    const [count, setCount]=useState(0)
    

    const increase= () => {
        setCount(count+1)
    }
    const decrease= () => {
        setCount(count-1)
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;
