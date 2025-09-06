import React from 'react';
import './homebanner.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import sliderimg1 from './../../../assets/images/sliderimg1.jpg';
import sliderimg2 from './../../../assets/images/sliderimg2.jpg';
import sliderimg3 from './../../../assets/images/sliderimg3.jpg';
import sliderimg4 from './../../../assets/images/sliderimg4.jpg';
import sliderimg5 from './../../../assets/images/sliderimg5.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/effect-cards';

// import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Homebanner() {
    return (
        <>
            <div>

                <section className='it_homerbanner_block'>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}  // 🔁 This enables infinite loop
                           autoplay={{
                             delay: 5000,
                            disableOnInteraction: false,
                          }}
                        rewind={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg2} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        Electrical Services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            MDP have great experience in completing electrical projects professionally with specialist engineers. We always ready to accept the challenges to complete the projects timely. 
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg3} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        Civil Construction Services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            MDP Infra (India) Pvt. Ltd. is a leading infrastructure company maintaining quality standards in civil construction of institutional buildings, housing and external development. 
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg1} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        IT Solution & Services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            MDP provides complete solution of hardware, software, network resources and services that are required for the operation & management of an enterprise IT environment.
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                         <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg4} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        Manufacturing services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            Our manufacturing services focus on delivering precision, quality, and efficiency at every stage of production. With advanced technology, modern machinery, and skilled professionals.
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide> 

                        

                         <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg4} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        Real State services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            Our Real Estate services are dedicated to building modern, sustainable, and value-driven properties. From residential projects to commercial spaces, we focus on quality construction.
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className="it_homerbanner_item">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sliderimg4} className='img-fluid' alt='slider Images' />
                                </div>
                                <Container>
                                    <div className="titles">
                                        Warehouse Construction Services
                                    </div>
                                    <div className="subtitles">
                                        <p>
                                            We specialize in providing end-to-end warehouse construction services designed for durability, efficiency, and scalability. With expertise in modern engineering and innovative design.
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide> 

                        

                    </Swiper>
                </section>



                {/* <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    slidesPerView={1}
                    speed={600}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    parallax={true}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    // modules={[Parallax, Pagination, Navigation,Autoplay]}
                    modules={[Parallax, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            'background-image':
                                'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 2
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 3
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper> */}







            </div>
        </>
    )
}
