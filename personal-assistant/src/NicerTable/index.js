import React, { useState } from 'react'
import { FancyButton, Container, Table, Text, Input, Strike, Div } from './styles'


const NicerTable = () => {
  const [ data, dispatch ] = useState([]) 
  const [ comp, complete ] = useState([])
  const [ todoText, setTodoText ] = useState('')
  const [ searchText, setSearchText ] = useState('')
  
  const handleSubmit = () => {
    if (todoText) {
      action('ADD',todoText); setTodoText('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const action = ( task, payload, type, funct ) => {
    switch (task) {
      case 'CLEAR':
        complete([]) 
        dispatch([])
        break
      case 'ADD': 
        dispatch([...data,payload])
        break
      case 'COMP':
        dispatch(data.filter(t => payload !== t))
        complete([...comp,payload])
        break
      case 'DELETE': 
        funct(type.filter(t => payload !== t))
        break
      case 'FILTER': 
        return type.filter(t => String(t).includes(payload))
      default:
        break
    }
  }

  return (
    <Container>
      {data.length ? 
        <Text>tasks for Today:{' '}{data.length}</Text> : 
        <Text>nothing to Do!</Text>
      }
      <Text>enter Task</Text>
      <Input value={todoText} 
        onChange={e => setTodoText(e.target.value)} onKeyPress={e => handleKeyPress(e)}/>
      <FancyButton onClick={handleSubmit}>
        [add]
      </FancyButton>
      {data.length || comp.length ? 
        <Div>
          <Text>filter</Text>
          <Input value={searchText} 
            onChange={e => setSearchText(e.target.value)} />
          <Div>
            <Table>
              {action('FILTER', searchText, data).map((task) => 
                <tr>
                  <td>{task}</td>
                  <td>
                    <FancyButton onClick={() => 
                        action('COMP', task)}>
                      complete
                    </FancyButton>
                  </td>
                  <td>
                    <FancyButton onClick={() => 
                        action('DELETE', task, data, dispatch)}>
                      clear
                    </FancyButton>
                  </td>
                </tr>)
              }
              {action('FILTER', searchText, comp).map(task => 
                <tr>
                  <td>
                    <Strike>
                      {task}
                    </Strike>
                  </td>
                  <td>
                    <FancyButton onClick={() => 
                        action('DELETE', task, comp, complete)}>
                      clear
                    </FancyButton>
                  </td>
                </tr>)
              }
            </Table>
            <FancyButton onClick={() => action('CLEAR')}>
              [clear all]
            </FancyButton>
          </Div>
        </Div> :
        <Text>~~~~~~~~~~~~</Text>
      }
    </Container>
  )
}

export default NicerTable
