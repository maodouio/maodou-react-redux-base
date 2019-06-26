import React from 'react'
import { connect } from 'react-redux'
// import { addCourse } from '../actions'

const AddCourse = ({ handleSubmit }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        console.log('in form submit, dispatching..')
        // dispatch(addCourse(input.value))
        handleSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          新建课程
        </button>
      </form>
    </div>
  )
}

export default connect()(AddCourse)
