import './App.css'
import Auth from './helpers/googleLogin/GoogleOAuth'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  return (
    <>
      <Auth />
    </>
  )
}

export default App
