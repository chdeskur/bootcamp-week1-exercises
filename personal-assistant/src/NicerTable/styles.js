import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  min-width: 300px;
  top: 25%;
  left: 50%;
  margin: -50px 0 0 -150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: lightblue;
  font-family: 'Times New Roman';
  transition: 0.5s ease;

  &:hover {
    box-shadow: 10px 10px 5px lightgrey;
  }
`

export const FancyButton = styled.button`
  font-family: 'Times New Roman';
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 2px; 
  margin-left: auto;
  margin-right: auto;  
  background: lightblue;
  border: none;
  transition: color 0.5s ease-in;
  color: white;

  &:hover {
    color: teal;
  }
`

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  background: white;
  padding: 1px;
  border: none;
  color: darkgray;
`

export const Text = styled.h2`
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font: 'Times New Roman';
  font-size: 20px;
`

export const Input = styled.input`
  font: 'Times New Roman';
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  color: darkgrey;
  border: none;
`
export const Div = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Strike = styled.td`
  text-decoration: line-through;
`