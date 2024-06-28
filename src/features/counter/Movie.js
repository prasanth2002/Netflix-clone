import React from 'react'
import './Movie.css';
import play from './video/vid-bg.mp4';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReactPlayer from 'react-player';
function Movie() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='background'>

      <video autoPlay loop muted className="vid1">
        <source src={play} type="video/mp4" />
      </video>

      <h1 className='theme'>He premise of Money Heist involving the Professor and his ragtag team of idiosyncratic robbers who carry out the dangerously ambitious 11-day heist is purely fictional, bereaved by the creative ingenuity of the showrunner Alex Pina.</h1>

      <div>
        <h1 className='title'> MONEY HEIST </h1>
      </div>
      <div className='bt'>

        <button className='button'  onClick={() => setOpen(true)} > <PlayCircleOutlineIcon />Play</button>
        <Dialog className='dialogue'
              open={open}
              keepMounted
              onClose={() => setOpen(false)}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div >
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://www.youtube.com/watch?v=jof51nGx3Rs" />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>




            <button className='button'><PlaylistPlayIcon />  My List</button>

      </div>
     
    </div>
  )
}

export default Movie