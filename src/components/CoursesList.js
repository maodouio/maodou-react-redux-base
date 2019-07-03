import React from 'react'

const CoursesList = ({ name, children }) => (
  <div>
    <h3>{name}</h3>
    <div>{children}</div>
  </div>
)

export default CoursesList
