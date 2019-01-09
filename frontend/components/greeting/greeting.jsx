import React from 'react';
import { Link } from 'react-router-dom'; 

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
        </nav>
    )

    const personalGreeting = () => (
        <header className = "header-group">
            <h2 className="header-name">Hi {currentUser.username }</h2>
            <button className="header-button" onClick={logout}>Logout</button>
        </header>
    )
    return(
        currentUser ? personalGreeting() : sessionLinks()
    );
}

export default Greeting;