import React, { useEffect, useState } from 'react'
import { Container, Text } from './styles'


const HomePage = () => {
  const d = new Date()
  const [curTime, setTime] = useState([])

  useEffect(() => {
    setInterval(() => {
      const newD = new Date();
      setTime([newD.getHours() % 12,(`0${newD.getMinutes()}`).slice(-2)])
    }, 1000)}, [d]
  )

  return (
    <Container>
      {curTime[0] ? 
        <Container>
          <Text>hello</Text>
          <Text>the time is {curTime[0]}:{curTime[1]}</Text>
        </Container> : 
        <Container>
          <Text>loading all of space and time...</Text>
        </Container>
      }
    </Container>
  )
}

export default HomePage
