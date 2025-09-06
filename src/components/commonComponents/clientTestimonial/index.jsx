// import viteLogo from '/vite.svg'
import './clienttestimonial.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import clientimg1 from './../../../assets/images/clientimg1.png';
import clientimg2 from './../../../assets/images/clientimg2.png';
import clientimg3 from './../../../assets/images/clientimg3.png';
import clientimg4 from './../../../assets/images/clientimg4.png';
import clientimg5 from './../../../assets/images/clientimg5.png';


 


import { LazyLoadImage } from 'react-lazy-load-image-component';



export function Clienttestimonial({ clientimages }) {

    return (
        <>
            <div>

                <div className='it_clientsslider'>
                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation,Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1200: { slidesPerView: 5 },
                        }}
                    >
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg1} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg2} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg3} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg4} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg5} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg1} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg2} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg3} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg4} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg5} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg1} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg2} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg3} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg4} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={clientimg5} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}





import civilclientimg1 from './../../../assets/images/civilclientimg1.jpg';
import civilclientimg2 from './../../../assets/images/civilclientimg2.jpg';
import civilclientimg3 from './../../../assets/images/civilclientimg3.jpg';
import civilclientimg4 from './../../../assets/images/civilclientimg4.jpg';
import civilclientimg5 from './../../../assets/images/civilclientimg5.jpg';
import civilclientimg6 from './../../../assets/images/civilclientimg6.jpg'; 
import civilclientimg7 from './../../../assets/images/civilclientimg7.jpg';
import civilclientimg8 from './../../../assets/images/civilclientimg8.jpg';
import civilclientimg9 from './../../../assets/images/civilclientimg9.jpg';
import civilclientimg10 from './../../../assets/images/civilclientimg10.jpg';


export function CivilClienttestimonial({ clientimages }) {

    return (
        <>
            <div>

                <div className='it_clientsslider'>
                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation,Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1200: { slidesPerView: 5 },
                        }}
                    >
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg1} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg2} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg3} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg4} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg5} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg6} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg7} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg8} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg9} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='it_clinfo'>
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={civilclientimg10} alt="Estemeted Clinets" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
 
                    </Swiper>
                </div>

            </div>
        </>
    )
}






export default Clienttestimonial




// export default Testimonial
