import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Web from './Web.jsx'
import Party from './party'
//import Emoji from './emoji'
//import Calculator from './Calculator/Calculator'
import JsonExample from './jsonexample'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Party/>
  </StrictMode>
)
