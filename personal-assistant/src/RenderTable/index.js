import React, { useState } from 'react'
import { FancyButton, Container, Table, Text, TextBox, Div, RightButton } from './styles'


const RenderTable = () => {
  const [ data, dispatch ] = useState([]) 
  const [ todoText, setTodoText ] = useState('')
  const [ searchText, setSearchText ] = useState('')

  const action = ( task, payload ) => {
    switch (task) {
      case 'ADD': 
        dispatch([...data,payload])
        break
      case 'DELETE': 
        dispatch(data.filter(t => payload !== t))
        break
      case 'CLEAR': 
        dispatch([])
        break
      case 'FILTER': 
        return data.filter(t => String(t).includes(payload))
      default:
        break
    }
  }

  return (
    <Container>
      <Text> Enter a new task here </Text>
      <TextBox placeholder='to do' value={todoText} 
                onChange={e => setTodoText(e.target.value)}/>
      <RightButton onClick={() => {if (todoText) 
          {action('ADD',todoText); setTodoText('');}}}>
        add task
      </RightButton>
      <Text> Search for a task here </Text>
      <TextBox placeholder='to do' value={searchText} 
        onChange={e => setSearchText(e.target.value)} />
      {data.length ? 
        <Div>
          <Text>Tasks left: {data.length}</Text>
        <Table>{action('FILTER', searchText).map((task) => 
          <tr>
            <td>{task}</td>
            <td>
              <FancyButton onClick={() => action('DELETE', task)}>
                complete
              </FancyButton>
            </td>
          </tr>)}
        </Table>
        <FancyButton onChange={() => action('CLEAR')}>
          complete all
        </FancyButton>
        </Div> : 
        <Text>No Work To do!</Text> 
      }
    </Container>
  )
}

export default RenderTable
