import React, { useEffect } from 'react';
import './card.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactPlayer from 'react-player';

function Card() {
  const [open, setOpen] = React.useState(false);
  const [openMoney, setOpen1] = React.useState(false);
  const [openuntold, setOpen2] = React.useState(false);
  const [openmal, setOpen3] = React.useState(false);
  const [openli, setOpen4] = React.useState(false);


  return (

    <div className='cards_1'>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
          <div className='swiper'>


            <SwiperSlide > <img className='card1' src='Image/batman.jpg' /></SwiperSlide>
            <SwiperSlide > <img className='card2 ' src='Image/got.jpg' /></SwiperSlide>
            <SwiperSlide > <img className='card3' src='Image/kgf.jpg' /></SwiperSlide>
            <SwiperSlide > <img className='card4' src='Image/Rampage.jpg' /></SwiperSlide>
            <SwiperSlide ><img className='card4' src='Image\thor.jpg' /></SwiperSlide>
            <SwiperSlide ><img className='card4' src='Image\omp.jpg' /></SwiperSlide>
            <SwiperSlide ><img className='card4' src='Image\beast.jpg' /></SwiperSlide>
            <SwiperSlide ><img className='card4' src='Image\KVK.jpg' /></SwiperSlide>
            <SwiperSlide ><img className='card4' src='Image\MOON.jpg' /></SwiperSlide>

          </div>
        </div>
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div className='swiper'>


          <SwiperSlide > <img className='card1' src='Image/free.png' /></SwiperSlide>
          <SwiperSlide > <img className='card2 ' src='Image/hg.jpg' /></SwiperSlide>
          <SwiperSlide > <img className='card3' src='Image/re.jpg' /></SwiperSlide>
          <SwiperSlide > <img className='card4' src='Image/bb.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\kp.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\j.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\ge.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\tj.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\ia.jpg' /></SwiperSlide>

        </div>
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div className='swiper'>
          <div className='txt2'>

          </div>


          <SwiperSlide >
            <img className='card1' src='Image/res.jpg' /> </SwiperSlide>



          <SwiperSlide > <img className='card2 ' src='Image/wr.jpg' /></SwiperSlide>
          <SwiperSlide > <img className='card3' src='Image/th.jpg' /></SwiperSlide>
          <SwiperSlide > <img className='card4' src='Image/ma.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\li.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\pp.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\dr.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\ch.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\MOON.jpg' /></SwiperSlide>

        </div>

      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div className='swiper'>
          <div className='txt2'>

          </div>

          <SwiperSlide >
            <img className='card1' src='Image/res.jpg' onClick={() => setOpen(true)} />
            <Dialog
              open={open}
              keepMounted
              onClose={() => setOpen(false)}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div >
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://www.youtube.com/watch?v=vhmk6N5uXy8 " />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </SwiperSlide>


          <SwiperSlide >
            <img className='card2 ' src='Image/mh.jpg' onClick={() => { setOpen1(true) }} />
            <Dialog
              open={openMoney}
              keepMounted
              onClose={() => { setOpen1(false) }}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div>
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://www.youtube.com/watch?v=_InqQJRqGW4 " />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen1(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </SwiperSlide>


          <SwiperSlide >
            <img className='card3' src='Image/th.jpg' onClick={() => { setOpen2(true) }} />
            <Dialog
              open={openuntold}
              keepMounted
              onClose={() => { setOpen2(false) }}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div>
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://youtu.be/siEgFoUruOU" />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen2(false)}>Close</Button>
              </DialogActions>
            </Dialog>

          </SwiperSlide>

          <SwiperSlide >
            <img className='card4' src='Image/ma.jpg' onClick={() => { setOpen3(true) }} />
            <Dialog
              open={openmal}
              keepMounted
              onClose={() => { setOpen3(false) }}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div>
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://youtu.be/Gczt0fhawDs" />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen3(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </SwiperSlide>

          <SwiperSlide >
            <img className='card4' src='Image\li.jpg'  onClick={() => { setOpen4(true) }} />
            <Dialog
              open={openli}
              keepMounted
              onClose={() => { setOpen4(false) }}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent className="checking">
                <DialogContentText id="alert-dialog-slide-description">
                  <div>
                    <ReactPlayer className='trailer' width='100%' height='300px' url="https://youtu.be/6uFSJLQA_jA" />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen4(false)}>Close</Button>
              </DialogActions>
            </Dialog>

            </SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\pp.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\dr.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\ch.jpg' /></SwiperSlide>
          <SwiperSlide ><img className='card4' src='Image\MOON.jpg' /></SwiperSlide>

        </div>

      </Swiper>


    </div>

  )
}

export default Card