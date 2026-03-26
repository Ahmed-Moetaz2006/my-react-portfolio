import { useState } from 'react'
import'./App.css'
function App(){
  return(
    <div className="profile-card">
    <h1>Ahmed's portfolio</h1>
    <p className="subtitle">System & Management Information Student</p>
    <div className="info-section">
    <p>🚀 Learning Full-Stack Development</p>
    <p>💻 Tech Stack: HTML, CSS, JS, React</p>
    </div>
    <a className="github-link" 
    href="https://github.com/"
    target="-blank"
    rel="noreferrer">
    Vist My GitHub
    </a>
    </div>
  )
}
export default App