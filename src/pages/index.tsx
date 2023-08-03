// ** MUI Imports
//@ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Navbar from 'src/views/components/Navbar'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero'>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          effect={'fade'}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide
            style={{
              'background-image': 'url(/images/logo/slider1.jpg)',
              'background-position': 'center',
              'background-size': ' cover',
              width: '100%',
              height: '100%'
            }}
            className='slider-back1'
          >
            <div className='slider-content'>
              <h4 className='slider-subtitle'>Origanl and Natural</h4>
              <h1 className='silder-title'>Origanl and Natural</h1>
              <p className='silder-text'>
                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible
                margaret suitable he followed.
              </p>
            </div>
            {/* <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='slider1' /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{
              'background-image': 'url(/images/logo/slider3.jpg)',
              'background-position': 'center',
              'background-size': ' cover',
              width: '100%',
              height: '100%'
            }}
            className='slider-back2'
          >
            <div className='slider-content'>
              <h4 className='slider-subtitle'>Origanl and Natural</h4>
              <h1 className='silder-title'>Origanl and Natural</h1>
              <p className='silder-text'>
                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible
                margaret suitable he followed.
              </p>
            </div>
            {/* <img src='/images/logo/slider1.jpg' /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{
              'background-image': 'url(/images/logo/slider5.jpg)',
              'background-position': 'center',
              'background-size': ' cover',
              width: '100%',
              height: '100%'
            }}
            className='slider-back3'
          >
            <div className='slider-content'>
              <h4 className='slider-subtitle'>Origanl and Natural</h4>
              <h1 className='silder-title'>Origanl and Natural</h1>
              <p className='silder-text'>
                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible
                margaret suitable he followed.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <section className='about-section'>
          <Box sx={{ display: 'flex' }}>
            <Grid sm={6} md={5} lg={6}>
              <div>
                <img className='about-img' src='/images/logo/slider1.jpg' alt='slider1.jpg' />
                <img className='about-img2' src='/images/logo/slider3.jpg' alt='slider1.jpg' />
              </div>
            </Grid>
            <Grid sm={6} md={7} lg={6}>
              <div className='about-content'>
                <div className='about-text'>
                  <h1 className='about-heading'>Agriculture For Future Development</h1>
                  <p>
                    There are many variations of passages of ipsum available but the majority have suffered alteration
                    in some form by injected humor or random word which don’t look even. Comparison new ham melancholy
                    son themselves.
                  </p>
                </div>
                <div className='about-card'>
                  <div className='card1'>
                    <h3 className='about-card-heading'>Natural Farming</h3>
                    <p className='about-card-text'>Resolve parties but trying she shewing of moment.</p>
                  </div>
                  <div className='card2'>
                    <h3 className='about-card-heading'>Natural Farming</h3>
                    <p className='about-card-text'>Resolve parties but trying she shewing of moment.</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Box>
        </section>
        <section className='what-we-do'>
          <Grid container>
            <Grid sm={12} md={6}>
              <Box className='what-do-left'>
                <p className='what-do-heading'>WHAT WE DO</p>
                <h1>
                  Currently we are <br />
                  selling organic food
                </h1>
              </Box>
            </Grid>
            <Grid sm={12} md={6}>
              <Box className='what-do-right'>
                <p className='what-right-text'>
                  Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated
                  estimating excellence an to impression. ladies she basket season age her uneasy saw. Discourse
                  unwilling am no described.
                </p>
              </Box>
            </Grid>
            <Box></Box>
          </Grid>
        </section>
      </div>
    </>
  )
}
// Home.guestGuard = true
Home.authGuard = false
Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Home
