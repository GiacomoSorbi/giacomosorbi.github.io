import React from 'react'
import './Projects.css'
import { projects } from '../../constants'
import { Link } from 'react-router-dom'

const Projects = () => (
  <div>
    <h1>Hi, I am the Projects Screen</h1>
    <div className='projects-list'>
      {projects.map(project => (
        <Link to={`/projects/${project.path}`}>{project.name}</Link>
      ))}
    </div>
  </div>
)

export default Projects
