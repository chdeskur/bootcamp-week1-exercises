import styled from 'styled-components'

export const Heading = styled.div`
    height: 200px;
    border: 4px solid lightgray;
    cursor: url('../gar.png'), grabbing; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightblue url('https://b-i.forbesimg.com/danmunro/files/2013/10/BSOD2-1024x487.png');
`

export const Link = styled.a`
    font-size: 28px;
    font-weight: bold;
    transition: color 0.5s ease;
    color: red;

    &:hover {
        cursor: help;
        color: limegreen;
    }
` 

export const Text = styled.h2`
    color: black;
    font-size: 28px;
`
