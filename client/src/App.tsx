import { constants } from 'buffer';
import './App.css'
import Auth from "./helpers/googleLogin/GoogleOAuth"
import axios from "axios";
import { useState } from 'react';
axios.defaults.baseURL = "http://localhost:3001";

function App() {
const [count, setCount] = useState(0)

return (
    <div>
    <header>TS AMAZONIAA</header>
    <main></main>
    <Auth />´
    <footer>ALL RIGTH  RESERVE</footer>

    </div>
  )
}

export default App
