import React, { useState, useEffect } from 'react'
import { Heading, Link, Text } from './styles'

const Header = () => {
  const data = {
    name: 'Dipshit'
  }

  const [weather, setWeather] = useState('')

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
        const data = await res.json()
        setWeather(data.weather[0].description)
      }
  fetchData()
  }, [])


  return (
    <Heading>
      <Link target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' title="PLEASE click me.">
        {data.name.length ? `Hello, ${data.name}` : 'Hello!'}
      </Link> 
      <Text> 
        Today's weather: {' '}{weather}
      </Text>
    </Heading>
  )
}

export default Header
