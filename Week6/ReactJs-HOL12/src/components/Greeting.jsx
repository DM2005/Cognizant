import React from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

export default function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
