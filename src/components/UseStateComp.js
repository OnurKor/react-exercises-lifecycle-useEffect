import React from 'react'
import { useState } from 'react'

//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.

const UseStateComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'Felix', age: '25', email: 'felix@gmail.com' })

  // const increase = () => setCount(count +1)
  const increase = () => setCount((count) => count + 1) // aynı işlem farklı
  const increaseAge = () => setAge(age + 1)
  const updateUser = () => setUser({ ...user, name: 'Munir' })
  console.log(user)

  return (
    <div className="function">

    </div>
  )
}

export default UseStateComp
