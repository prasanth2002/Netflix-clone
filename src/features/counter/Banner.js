import React from 'react';
import './Banner.css'
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import {Link, Outlet} from 'react-router-dom';
import { Movie } from "./Movie";

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - -54) + '...' : string

    }
    return (
        <header
            className='Banner'
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://wallpapercave.com/wp/wp6581266.jpg")`,
            }} >

            <div className='banner_contents'>
                <h1 className='banner_title'> MONEY HEIST </h1>
                <div className='star'> <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    < StarBorderIcon />

                </div>

                <div></div>
                <div className='banner_buttons'>

                </div>
                < h1 className='banner_description'> {truncate(`He premise of Money Heist involving the Professor and his ragtag team of idiosyncratic robbers who carry out the dangerously ambitious 11-day heist is purely fictional, bereaved by the creative ingenuity of the showrunner Alex Pina.`, 150)}</h1>
                <Link to="/Movie"><button className='banner_button' > <PlayCircleOutlineIcon /> Play</button></Link>

                <button className='banner_button'><PlaylistPlayIcon />  My List</button>
            </div>
            <div className='banner_fadebottom'> </div>

            <h1 className='txt1'> Trending Movies</h1>
            < h1 className='txt2'> Comedy Movies</h1>
            <h1 className='txt2'> Horror Movies</h1>
            <h1 className='txt2'> TRAILERS</h1>
        </header>
    )
}

export default Banner