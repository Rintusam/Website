import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="div">
            <h1 className="h1">Your Brand</h1>

            <div className="h3">
                <h3>Home</h3>
                <h3>Explore Programs</h3>
                <h3>How it Works</h3>
                <h3>Resources</h3>
                <h3>Contacts</h3>
            </div>

            <div className="Button">
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}

export default NavBar
