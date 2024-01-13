import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button  className='btn btn-primary fw-bold' onClick={props.click}>{props.data}</button>
    </div>
  )
}
