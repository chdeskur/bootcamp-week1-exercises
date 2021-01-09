import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <NavLink to='/'>home</NavLink>
    <NavLink to='/todo'>peace</NavLink>
    <NavLink to='/chaos'>chaos</NavLink>
  </Container>
)

export default Navbar
