import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
`

export const NavLink = styled(link).attrs()`
  font-family: 'Times New Roman';
  font-size: 22px;
  color: white;
  margin: 0 20px;
  text-decoration: none;
`
