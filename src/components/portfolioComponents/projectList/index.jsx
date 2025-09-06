import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import branchImg1 from './../../../assets/images/branch01.jpg';
import branchImg2 from './../../../assets/images/branch02.jpg';
import branchImg3 from './../../../assets/images/branch03.jpg';
import blogimg1 from './../../../assets/images/blog_1.jpg';
import blogimg2 from './../../../assets/images/blog_2.jpg';
import blogimg3 from './../../../assets/images/blog_3.jpg';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Heading from '../../commonComponents/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export function Projectlink() {
  const images = [
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items

  const filters = ["All", "Civil", "IT", "Electricals", "Manufacturers", "Real State"];

  // This can later be updated for real filtering logic
  const filteredImages = images.filter((img) =>
    activeFilter === "All" ? true : img.servicecategory === activeFilter
  );

  return (
    <div>
      <section className="it_portfolio_main">
        <Container>
          <Heading
            headbg="Portfolio"
            headtext="Introduce Our all Projects"
            subheadtext="Introduce Our Projects"
            textAlign="text-center"
          />


          <ul className="it_portfolio_filters">
            {filters.map((filter) => (
              <li className="nav-item" key={filter}>
                <NavLink
                  href="#"
                  className={`nav-link ${activeFilter === filter ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(filter);
                    setVisibleCount(6); // reset count on filter change
                  }}
                >
                  {filter}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="it_eventgallery_box">
            <Row>
              {filteredImages.slice(0, visibleCount).map((imgData, index) => (
                <Col lg="4" md="6" sm="12" key={index}>
                  <div className="it_project_items">
                    <div className="it_imgbox">
                      <LazyLoadImage effect="blur" src={imgData.src} alt={`Project Image ${index + 1}`} />
                    </div>
                    <div className="it_contents">
                      <h6># {imgData.servicecategory}</h6>
                      <h4>{imgData.title}</h4>
                      <NavLink href="#" className="it_links" to="/portfoliodetails">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Show More Button */}
            {visibleCount < filteredImages.length && (
              <div className="text-center mt-4">
                <Button
                  className="btn it_submitbtn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Read More
                  <FontAwesomeIcon className="ml-2" icon={faAnglesRight} />
                </Button>
              </div>
            )}
          </div>

        </Container>
      </section>
    </div>

  );
}




export function Homeprojectlink() {
  const images2 = [
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
  ];

  return (
    <div>
      <section className="it_portfolio_main">
        <Container>
          <Heading
            headbg="Portfolio"
            headtext="Our Projects"
            subheadtext="What we have done"
            textAlign="text-center"
          />

          <div className="it_eventgallery_box">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
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
                1200: { slidesPerView: 4 },
              }}
            >
              {images2.map((imgData, index) => (
                <SwiperSlide key={index}>
                  <div className="it_project_items">
                    <div className="it_imgbox">
                      <LazyLoadImage
                        effect="blur"
                        src={imgData.src}
                        alt={`Project Image ${index + 1}`}
                      />
                    </div>
                    <div className="it_contents">
                      <h6># {imgData.servicecategory}</h6>
                      <h4>
                        <NavLink
                          href="#"
                          className=""
                          to="/civil/portfoliodetails"
                        >
                          {imgData.title}
                        </NavLink>

                      </h4>
                      <NavLink
                        href="#"
                        className="it_links"
                        to="/civil/portfoliodetails"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </Container>
      </section>
    </div>

  );
}








export function Civilprojectlink() {
  const images1 = [
    { src: branchImg1, title: 'Residential Quarters ESIC Campus, Nanda Nagar, Indore (M.P.)', servicecategory: 'WAPCOS Ltd., Gurugram' },
    { src: blogimg1, title: '400-Bedded Hostel, LNIPE Gwalior', servicecategory: 'CPWD, Indore' },
    { src: branchImg2, title: 'Regional Passport Office Building, Arera Hills, Bhopal', servicecategory: 'CPWD, Bhopal.' },
    { src: blogimg2, title: 'Faculty Housing, IIT Indore', servicecategory: 'CPWD, Indore' },
    { src: branchImg3, title: 'ITBP Barracks and Quarters, Karera (M.P.)', servicecategory: ': CPWD, Gwalior' },
    { src: blogimg3, title: '336 LIG Houses, Scheme 136, Indore', servicecategory: 'Indore Development Authority, Indore.' },
    { src: branchImg1, title: 'Residential Quarters ESIC Campus, Nanda Nagar, Indore (M.P.)', servicecategory: 'WAPCOS Ltd., Gurugram' },
    { src: blogimg1, title: '400-Bedded Hostel, LNIPE Gwalior', servicecategory: 'CPWD, Indore' },
    { src: branchImg2, title: 'Regional Passport Office Building, Arera Hills, Bhopal', servicecategory: 'CPWD, Bhopal.' },
    { src: blogimg2, title: 'Faculty Housing, IIT Indore', servicecategory: 'CPWD, Indore' },
    { src: branchImg3, title: 'ITBP Barracks and Quarters, Karera (M.P.)', servicecategory: ': CPWD, Gwalior' },
    { src: blogimg3, title: '336 LIG Houses, Scheme 136, Indore', servicecategory: 'Indore Development Authority, Indore.' },
    { src: branchImg1, title: 'Residential Quarters ESIC Campus, Nanda Nagar, Indore (M.P.)', servicecategory: 'WAPCOS Ltd., Gurugram' },
    { src: blogimg1, title: '400-Bedded Hostel, LNIPE Gwalior', servicecategory: 'CPWD, Indore' },
    { src: branchImg2, title: 'Regional Passport Office Building, Arera Hills, Bhopal', servicecategory: 'CPWD, Bhopal.' },
    { src: blogimg2, title: 'Faculty Housing, IIT Indore', servicecategory: 'CPWD, Indore' },
    { src: branchImg3, title: 'ITBP Barracks and Quarters, Karera (M.P.)', servicecategory: ': CPWD, Gwalior' },
    { src: blogimg3, title: '336 LIG Houses, Scheme 136, Indore', servicecategory: 'Indore Development Authority, Indore.' },
    { src: branchImg1, title: 'Residential Quarters ESIC Campus, Nanda Nagar, Indore (M.P.)', servicecategory: 'WAPCOS Ltd., Gurugram' },
    { src: blogimg1, title: '400-Bedded Hostel, LNIPE Gwalior', servicecategory: 'CPWD, Indore' },
    { src: branchImg2, title: 'Regional Passport Office Building, Arera Hills, Bhopal', servicecategory: 'CPWD, Bhopal.' },
    { src: blogimg2, title: 'Faculty Housing, IIT Indore', servicecategory: 'CPWD, Indore' },
    { src: branchImg3, title: 'ITBP Barracks and Quarters, Karera (M.P.)', servicecategory: ': CPWD, Gwalior' },
    { src: blogimg3, title: '336 LIG Houses, Scheme 136, Indore', servicecategory: 'Indore Development Authority, Indore.' },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items

  const civilfilters = ["General Contracting", "Fit-outs", "Residential", "Corporate & Retail", "Institutional"];

  // This can later be updated for real filtering logic
  const filteredImages = images1.filter((img) =>
    activeFilter === "All" ? true : img.servicecategory === activeFilter
  );

  return (
    <div>
      <section className="it_portfolio_main">
        <Container>
          <Heading
            headbg="Portfolio"
            headtext="Our Civil Projects"
            subheadtext="What we have done in civil"
            textAlign="text-center"
          />


          <ul className="it_portfolio_filters">
            {civilfilters.map((cfilter) => (
              <li className="nav-item" key={cfilter}>
                <a
                  href="#"
                  className={`nav-link ${activeFilter === cfilter ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(cfilter);
                    setVisibleCount(6); // reset count on filter change
                  }}
                >
                  {cfilter}
                </a>
              </li>
            ))}
          </ul>

          <div className="it_eventgallery_box">
            <Row>
              {filteredImages.slice(0, visibleCount).map((imgData, index) => (
                <Col lg="4" md="6" sm="12" key={index}>
                  <div className="it_project_items" >
                    <div className="it_imgbox">
                      <LazyLoadImage effect="blur" src={imgData.src} alt={`Project Image ${index + 1}`} />
                    </div>
                    <div className="it_contents">
                      <h6># {imgData.servicecategory}</h6>
                      <h4>{imgData.title}</h4>
                      <NavLink href="#" className="it_links" to="/civil/portfoliodetails">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Show More Button */}
            {visibleCount < filteredImages.length && (
              <div className="text-center mt-4">
                <Button
                  className="btn it_submitbtn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Read More
                  <FontAwesomeIcon className="ml-2" icon={faAnglesRight} />
                </Button>
              </div>
            )}
          </div>

        </Container>
      </section>
    </div>

  );
}





export function Eleprojectlink() {
  const images1 = [
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items

  const civilfilters = ["Equipment", "Components", "Materials"];

  // This can later be updated for real filtering logic
  const filteredImages = images1.filter((img) =>
    activeFilter === "All" ? true : img.servicecategory === activeFilter
  );

  return (
    <div>
      <section className="it_portfolio_main">
        <Container>
          <Heading
            headbg="Portfolio"
            headtext="Our electrical  Projects"
            subheadtext="What we have done in electrical "
            textAlign="text-center"
          />


          <ul className="it_portfolio_filters">
            {civilfilters.map((cfilter) => (
              <li className="nav-item" key={cfilter}>
                <a
                  href="#"
                  className={`nav-link ${activeFilter === cfilter ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(cfilter);
                    setVisibleCount(6); // reset count on filter change
                  }}
                >
                  {cfilter}
                </a>
              </li>
            ))}
          </ul>

          <div className="it_eventgallery_box">
            <Row>
              {filteredImages.slice(0, visibleCount).map((imgData, index) => (
                <Col lg="4" md="6" sm="12" key={index}>
                  <div className="it_project_items" >
                    <div className="it_imgbox">
                      <LazyLoadImage effect="blur" src={imgData.src} alt={`Project Image ${index + 1}`} />
                    </div>
                    <div className="it_contents">
                      <h6># {imgData.servicecategory}</h6>
                      <h4>{imgData.title}</h4>
                      <NavLink href="#" className="it_links" to="/civil/portfoliodetails">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Show More Button */}
            {visibleCount < filteredImages.length && (
              <div className="text-center mt-4">
                <Button
                  className="btn it_submitbtn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Read More
                  <FontAwesomeIcon className="ml-2" icon={faAnglesRight} />
                </Button>
              </div>
            )}
          </div>

        </Container>
      </section>
    </div>

  );
}




export function Itprojectlink() {
  const images1 = [
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg1, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg2, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: branchImg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
    { src: blogimg3, title: 'Real Solutions, Real Impact', servicecategory: 'It Solutions' },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items

  const civilfilters = ["Integration", "Development", "Video tetsing"];

  // This can later be updated for real filtering logic
  const filteredImages = images1.filter((img) =>
    activeFilter === "All" ? true : img.servicecategory === activeFilter
  );

  return (
    <div>
      <section className="it_portfolio_main">
        <Container>
          <Heading
            headbg="Portfolio"
            headtext="Our It  Projects"
            subheadtext="What we have done in IT "
            textAlign="text-center"
          />


          <ul className="it_portfolio_filters">
            {civilfilters.map((cfilter) => (
              <li className="nav-item" key={cfilter}>
                <a
                  href="#"
                  className={`nav-link ${activeFilter === cfilter ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(cfilter);
                    setVisibleCount(6); // reset count on filter change
                  }}
                >
                  {cfilter}
                </a>
              </li>
            ))}
          </ul>

          <div className="it_eventgallery_box">
            <Row>
              {filteredImages.slice(0, visibleCount).map((imgData, index) => (
                <Col lg="4" md="6" sm="12" key={index}>
                  <div className="it_project_items" >
                    <div className="it_imgbox">
                      <LazyLoadImage effect="blur" src={imgData.src} alt={`Project Image ${index + 1}`} />
                    </div>
                    <div className="it_contents">
                      <h6># {imgData.servicecategory}</h6>
                      <h4>{imgData.title}</h4>
                      <NavLink href="#" className="it_links" to="/civil/portfoliodetails">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Show More Button */}
            {visibleCount < filteredImages.length && (
              <div className="text-center mt-4">
                <Button
                  className="btn it_submitbtn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Read More
                  <FontAwesomeIcon className="ml-2" icon={faAnglesRight} />
                </Button>
              </div>
            )}
          </div>

        </Container>
      </section>
    </div>

  );
}


export default Projectlink;

