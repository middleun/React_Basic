import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

function Navigation(){
    // 기능은 Link to로 하지만, 웹상에서는 a 태그로로  인식되어 나옴. 

    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;