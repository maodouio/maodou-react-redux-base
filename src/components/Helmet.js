import React from 'react'
import { Helmet } from 'react-helmet'

export default props => {
  return (
    <Helmet>
      {props.title && <title>{props.title}</title>}
      {props.description && (
        <meta name="description" content={props.description} />
      )}
    </Helmet>
  )
}
