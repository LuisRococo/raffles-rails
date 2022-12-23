import React from 'react'
import {createRoot} from "react-dom/client"

function Welcome() {
  return (
    <div className='container'>
        <h1>Welcome</h1>
    </div>
  )
}


document.addEventListener("DOMContentLoaded", ()=> {
    const root = createRoot(document.getElementById("root"));
    root.render(<Welcome />);
})