import React from 'react'

export default function Checkout(props) {
  return (
    <div className='text-center mt-5 bg-warning p-5 container'>
        <h1>Your Price :- {props.price * props.Counter}</h1>
    </div>
  )
}
