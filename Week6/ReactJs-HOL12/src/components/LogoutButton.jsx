import React from 'react'

export default function LogoutButton(props) {
  return (
    <button onClick={props.onClick} className="btn">
      Logout
    </button>
  )
}
