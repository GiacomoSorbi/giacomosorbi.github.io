import React from 'react'
import './Project.css'

const Project = ({
  match: {
    params: { id },
  },
}) => (
  <div>
    <h1>Hi, I am the Project Screen for project {id}</h1>
  </div>
)

export default Project
