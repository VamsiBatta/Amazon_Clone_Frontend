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
                    <div className='navbar_hello_location_marker'>
                        <div className='navbar_location'>Select Your City </div>
                        <div >
                            <select style={{marginBottom:"3px"}}>
                                <option value="Select">Select</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Pune">Pune</option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Mangalore">Mangalore</option>
                            </select>
                        </div>
                    </div>
                </div> 
                <div className='navbar_searchcomponent'>
                    <div>
                        <select className='nav_dropdown'>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                            
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar_searchbox"></input>
                    </div>
                    <div className='navbar_searchboxdiv'>
                        <div className='navbar_searchicon'/>
                    </div>
                </div>
                <div>
                        <select className='navbar_country_dropdown' >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Germany">Germany</option>
                            <option value="Russia">Russia</option>
                            <option value="Japan">Japan</option>
                            <option value="Spain">Spain</option>
                        </select>
                    
                </div>
                <div className='navbar_text navbar_signin'>
                    <div className='navbar_hello_signIn'>Hello, Sign In</div>
                    <div style={{fontWeight:"bold"}}>Account & Lists</div>
                </div>
                <div className='navbar_text navbar_returns'>
                    <div className="navbar_text_returns">Returns </div>
                    <div style={{fontWeight:"bold"}}>& Orders</div>
                </div>
                    <div className='navbar_text navbar_cart'>
                        <div src="" className='cart_image'></div>
                        <div className='cart_item'>0</div>
                        <div className='navbar_text_cart'>Cart</div>
                    </div>
               
            </div>
        );
    }
}

export default NavBar;