import React from 'react'
import './header.scss'
import {LinkedIn,Instagram,Mail} from "@material-ui/icons"

export default function header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Folio</a> 
                </div>
                <div className="right">
                <div className="itemContainer">
                    <a href="https://www.instagram.com/hrishi__x"><Instagram className = "icon"/></a>
                </div>
                <div className="itemContainer">
                <a href="https://www.linkedin.com/in/hrishikesh-mahalle-40521517a/"><LinkedIn className = "icon"/></a>
                </div>
                <div className="itemContainer">
                <a href="portfolio"><Mail className = "icon"/></a>
                </div>
                </div>
            </div>
        </div>
    )
}
