import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="navbar_component">
                <div className='navbar_logo'/>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='navbar_location'>Bangalore</div>
                </div> 
            </div>
        );
    }
}

export default NavBar;