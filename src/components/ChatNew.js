import React from 'react'
import { connect } from 'react-redux'

const AddChat = ({ handleSubmit }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        console.log('[form submit] handleSubmit input: ', input.value)
        handleSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          发送
        </button>
      </form>
    </div>
  )
}

export default connect()(AddChat)
