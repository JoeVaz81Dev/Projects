import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/3.jpg'
import AVTR2 from '../../assets/avatar3.jpg'
import AVTR3 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Amber Keller',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure blanditiis quae, eum fugiat dolor, ad ratione incidunt nesciunt totam officia excepturi atque cum, tempora veritatis eius asperiores nulla sint aspernatur.'
  },
  {
    avatar: AVTR2,
    name: 'Rondell James',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure blanditiis quae, eum fugiat dolor, ad ratione incidunt nesciunt totam officia excepturi atque cum, tempora veritatis eius asperiores nulla sint aspernatur.'
  },
  {
    avatar: AVTR3,
    name: 'Kundara Wali',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure blanditiis quae, eum fugiat dolor, ad ratione incidunt nesciunt totam officia excepturi atque cum, tempora veritatis eius asperiores nulla sint aspernatur.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} /> 
                </div>
                <div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials