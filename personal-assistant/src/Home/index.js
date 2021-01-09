import React, { useEffect, useState } from 'react'
import { Container, Text } from './styles'


const HomePage = () => {
  const [curTime, setTime] = useState([])
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    setInterval(() => {
      const newD = new Date();
      setTime([newD.getHours() % 12,(`0${newD.getMinutes()}`).slice(-2)])
    }, 1000)
    fetch('http://quotes.rest/qod.json?category=inspire')
    .then(res=> res.json())
    .then(data=>{
      setQuote(data.contents.quotes[0].quote)
      setAuthor(data.contents.quotes[0].author)
    })}, []
  )

  return (
    <Container>
      {curTime ? 
        <Text>
          <Text>hello</Text>
          <Text>the time is {curTime[0]}:{curTime[1]}</Text>
          {quote ? 
            <Text>
              "{String(quote).toLowerCase()}"
              <br/>
              -{String(author).toLowerCase()}
            </Text> : 
            <Text>
              "this is what i am."
              <br/>
              -edward cullen
            </Text>
          }
        </Text> : 
        <Text>
          loading...
        </Text>
      } 
    </Container>
  )
}

export default HomePage
