import React from 'react'

const UserInfo = (props) => {
  return (
    <div>
        <h1>my name is {props.firstname} and my last name is{props.lastname}and my email address is {props.add} and my phone number is {props.phone}</h1>
    </div>
  )
}

export default UserInfo