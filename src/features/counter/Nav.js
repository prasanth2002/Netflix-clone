import React, { useEffect, useState } from 'react'
import './Nav.css'

import { Link, Outlet } from 'react-router-dom';
function Nav() {
    const [show, handleshow] = useState(false);

    const transitinNavbar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        } else {
            handleshow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitinNavbar);
        return () => window.removeEventListener("scroll", transitinNavbar);
    }, []);
    return (
        <div className={` nav ${show && 'nav_black'}`}>
            <div className='nav_content'>
                <img
                    className='nav_logo'
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=''
                />

                <Link to="/Login"><img
                    className='nav_avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt='' 
                /></Link>
            </div>


        </div>
    )
}

export default Nav