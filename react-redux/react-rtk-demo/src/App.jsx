import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserView } from './features/user/UserView.jsx'
import { IcecreamView } from './features/icecream/IcecreamView'
import { CakeView } from './features/cake/cakeView'
function App() {
  const [count, setCount] = useState(1000)

  return (
    <div>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App
