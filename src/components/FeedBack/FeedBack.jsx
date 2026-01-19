
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// React Icons
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

import "./FeedBack.css";

function FeedBack() {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">What Our Clients Say</h2>
      <p className="feedback-subtitle">
        Discover why businesses trust PDMA for their digital transformation journey
      </p>

      <Swiper
     
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={1}   
        className="mySwiper container"
      >

        
        <SwiperSlide>
          <div className="cards-wrapper">

            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
              </div>
              <p className="comment">
                "The digital strategy implemented by PDMA boosted our online sales by 150%..."
              </p>
              <div className="user-info">
                <div className="my-circle">LT</div>
                <div>
                  <h5 className="custom-Name">Lisa Thompson</h5>
                  <p>E-commerce Manager</p>
                  <p className="custom-company">Fashion Forward</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder />
              </div>
              <p className="comment">
                "PDMA helped us establish a strong digital footprint from scratch..."
              </p>
              <div className="user-info">
                <div className="my-circle">RM</div>
                <div>
                  <h5 className="custom-Name" >Robert Martinez</h5>
                  <p>Founder</p>
                  <p className="custom-company">GreenTech Solutions</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
              </div>
              <p className="comment">
                "PDMA transformed our digital presence completely..."
              </p>
              <div className="user-info">
                <div className="my-circle">SJ</div>
                <div>
                   <h5 className="custom-Name" >Sarah Johnson</h5>
                  <p>Marketing Director</p>
                  <p className="custom-company">TechNova Inc.</p>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="cards-wrapper">

            {/* Card 4 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /><MdOutlineStarBorder />
              </div>
              <p className="comment">
                "Amazing support and extremely professional team..."
              </p>
              <div className="user-info">
                <div className="my-circle">AM</div>
                <div>
                   <h5 className="custom-Name" >Adam Moore</h5>
                  <p>CEO</p>
                  <p className="custom-company">WebX</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
              </div>
              <p className="comment">
                "Highly recommended for digital transformation..."
              </p>
              <div className="user-info">
                <div className="my-circle">KB</div>
                <div>
                   <h5 className="custom-Name" >Karen Blake</h5>
                  <p>Product Manager</p>
                  <p className="custom-company">SkyApps</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /><MdOutlineStarBorder /><MdOutlineStarBorder />
              </div>
              <p className="comment">
                "Very creative team with fast delivery..."
              </p>
              <div className="user-info">
                <div className="my-circle">MF</div>
                <div>
                   <h5 className="custom-Name" >Mark Foster</h5>
                  <p>CTO</p>
                  <p className="custom-company">TechBridge</p>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="cards-wrapper">

            {/* Card 7 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /><MdOutlineStarBorder />
              </div>
              <p className="comment">
                "Amazing support and extremely professional team..."
              </p>
              <div className="user-info">
                <div className="my-circle">AM</div>
                <div>
                   <h5 className="custom-Name" >Adam Moore</h5>
                  <p>CEO</p>
                  <p className="custom-company">WebX</p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
              </div>
              <p className="comment">
                "Highly recommended for digital transformation..."
              </p>
              <div className="user-info">
                <div className="my-circle">KB</div>
                <div>
                   <h5 className="custom-Name" >Karen Blake</h5>
                  <p>Product Manager</p>
                  <p className="custom-company">SkyApps</p>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="testimonial-card">
              <div className="rating">
                <MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /><MdOutlineStarBorder /><MdOutlineStarBorder />
              </div>
              <p className="comment">
                "Very creative team with fast delivery..."
              </p>
              <div className="user-info">
                <div className="my-circle">MF</div>
                <div>
                   <h5 className="custom-Name" >Mark Foster</h5>
                  <p>CTO</p>
                  <p className="custom-company">TechBridge</p>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default FeedBack;
