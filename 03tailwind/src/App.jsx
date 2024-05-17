import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj= {
    username: "Anuj shrivastava",
    age:28
  }

  let newArr=[1, 2 ,3] 

  return (
    <>
      <h1 className='bg-green-400 text-black px-4 py-2 rounded-xl mb-4'>tailwind test</h1>
     <Card username="chai aur code" btnText="Click ME"/>
     <Card username="vite aur react" btnText="View Me"/>
    </>
  )
}

export default App
