import './App.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'
import Landing from './page/landing.tsx'

function App() {
  return (
    <>
      <Landing />
      <br />
    </>
  )
}

export default App
