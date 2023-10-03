import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar-brand">
                <h1>Scrap Savy Hub</h1>
            </div>
            <div className="navbar-links">
                <Link to="/">HOME</Link>
                <Link to="/viewprice">VIEW PRICE</Link>
                <Link to="/registration">REGISTRATION</Link>
                <Link to="/login">lOGIN</Link>
                <Link to="/shop_details">SHOP DETAILS</Link>

            </div>   
        </div>
    )
}

export default Navbar