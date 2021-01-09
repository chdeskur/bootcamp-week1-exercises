import styled from 'styled-components'

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 3px dotted red;
    cursor: none;
    background: url('https://i.kym-cdn.com/entries/icons/mobile/000/025/923/1504551931722.jpg');
    opacity: 0;
    transition: opacity 0.5s ease-in;

    &:hover {
      opacity: 1;
    }
`

export const FancyButton = styled.button`
    display: inline;
    margin-left: auto;
    margin-right: auto;   
    background: lightblue;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: color 0.5s ease-in;

    &:hover {
      cursor: context-menu;
      color: white;
    }
`

export const RightButton = styled.button`
  position: relative;
  float: right;
`

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  background: purple;
  border: 2px solid yellow;
`

export const Text = styled.h2`
  color: purple;
  font-size: 20px;
`

export const TextBox = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: green;
  cursor: vertical-text;
`
export const Div = styled.div`
  font: 'Times New Roman';
`