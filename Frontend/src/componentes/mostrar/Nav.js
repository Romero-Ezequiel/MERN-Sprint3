import React from 'react';
import user from '../img/user.png';
import '../estilos/nav-estilos.css';

import { Link } from "react-router-dom";

class SideNavPage extends React.Component {
    state = {
        state: {
            showNav: false
        }
    }

    openNavClick = e => {
        e.preventDefault()
        this.openNav()
    }

    closeNavClick = e => {
        e.preventDefault()
        this.closeNav()
    }

    openNav = () => {
        this.setState({
            showNav: true
        })

        document.addEventListener("keydown", this.handleEscKey)
    }
    closeNav = () => {
        this.setState({
            showNav: false
        })
        document.removeEventListener("keydown", this.handleEscKey)
    }

    handleEscKey = e => {
        if (e.key === "Escape") {
            this.closeNav()
        }
    }

    render() {
        const { showNav } = this.state
        let navCoverStyle = { width: showNav ? "100%" : "0" }
        let sideNavStyle = { width: showNav ? "250px" : "0" }

        return (
            <React.Fragment>
                <span className="user-side">
                    <img src={user} className="user-img" alt="logo" />
                </span>
                <span onClick={this.openNavClick} className="open-nav">
                    &#9776;
                </span>
                <div
                    onClick={this.navCoverClick}
                    className="nav-cover"
                    style={navCoverStyle}
                />
                <div name="side-nav" className="side-nav" style={sideNavStyle}>
                    <a href="/#" onClick={this.closeNavClick} className="close-nav">
                        &times;
                    </a>

                    <div>
                        <Link to="/" onClick={this.closeNav} >Home</Link>
                        <Link to="/Registrarse" onClick={this.closeNav}>Registrarse</Link>
                        <Link to="/Login" onClick={this.closeNav}>Iniciar Sesión</Link>
                        <Link to="/Itinerary" onClick={this.closeNav}>Itinerary</Link>
                        <hr />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default SideNavPage;