import './App.css'
import Auth from './helpers/googleLogin/GoogleOAuth'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'
import Landing from './page/landing.tsx'

function App() {
  return (
    <>
      <Landing />
      <Auth />
    </>
  )
}

export default App
