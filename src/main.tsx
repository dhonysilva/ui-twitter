import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Dhony" likes={11}>Meu primeiro Tweet</Tweet>
      <Tweet user="Dhony">Meu primeiro Tweet</Tweet>
      <Tweet user="Dhony">Meu primeiro Tweet</Tweet>

    </div>
  </React.StrictMode>
)
