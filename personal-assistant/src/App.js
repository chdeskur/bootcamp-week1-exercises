import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header/index'
import RenderTable from './RenderTable/index'
import NicerTable from './NicerTable/index'
import Navbar from './Navbar/index'
import HomePage from './Home/index'

const App = () => (
  <div>
    <BrowserRouter basename="/personal-assistant">
      <Navbar />
      <Switch>
        <Route path='/todo'>
          <NicerTable />
        </Route>
        <Route path='/chaos'>
          <Header />
          <RenderTable />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)


export default App
