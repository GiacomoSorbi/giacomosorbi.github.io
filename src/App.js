import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const App = props => (
  <div className='app'>
    <header className='app-header'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </header>
    {props.children}
  </div>
)

export default App
