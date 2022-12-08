import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from 'src/Components/pages/LandingPage.js'
import LoginPage from 'src/Components/pages/LoginPage.js'
import RegisterPage from 'src/Components/pages/RegisterPage.js'
import ForgetPasswordPage from 'src/Components/pages/ForgotPasswordPage.js'
import HomePage from 'src/Components/pages/HomePage.js'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">PATCHWORX</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}