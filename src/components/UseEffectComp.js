import React, { useState, useEffect} from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  useEffect(() => {
    console.log("UseEffect!")
    // count !== 0 && alert(`New notification, total: ${count}`)
    let timer = setTimeout(() => {
      alert("hello")
    }, 3000)
    // setCount(count +1) // sonsuz döngüye girer. Sürekli birbirini tetikler
    return() => {
      console.log("Functional Component Unmounted")
      clearTimeout(timer)
    } //! clean up function
  }, [count])
  


  console.log("Func Comp Rendered!")
  // const increase = () => setCount(count + 1)
  const increase = () => setCount((count) => count + 1)
  const increaseAge = () => setAge(age + 1)

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={increase}>Increase Count</button>
      <p>Age: {age} </p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default UseEffectComp


// Her renderda calisir.
  // useEffect(() => {
  //   console.log('UseEffect!');
  // });

  // Ilk renderda, bir kere calisir.
  // useEffect(() => {
  //   console.log('UseEffect!');
  // }, []);

  // Sadece count degiskeni degistiginde calisiyor. 
  // useEffect(() => {
  //   console.log('UseEffect!');
  // }, [count]);

  // Hem count, hem de age degiskeni degistiginde calisiyor. 
  // useEffect(() => {
  //  console.log('UseEffect!');
  //}, [count, age]);