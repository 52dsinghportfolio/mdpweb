import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Heading from '../../commonComponents/heading';




import gallery_img1 from './../../../assets/images/gallery_img1.jpg'
import gallery_img2 from './../../../assets/images/gallery_img2.jpg'
import gallery_img3 from './../../../assets/images/gallery_img3.jpg'
import gallery_img4 from './../../../assets/images/gallery_img4.jpg'
import gallery_img5 from './../../../assets/images/gallery_img5.jpg'
import gallery_img6 from './../../../assets/images/gallery_img6.jpg'
import gallery_img7 from './../../../assets/images/gallery_img7.jpg'
import gallery_img8 from './../../../assets/images/gallery_img8.png'
import gallery_img9 from './../../../assets/images/gallery_img9.png'
import gallery_img10 from './../../../assets/images/gallery_img10.png'
import gallery_img11 from './../../../assets/images/gallery_img11.png'
import gallery_img12 from './../../../assets/images/gallery_img12.png'
import gallery_img13 from './../../../assets/images/gallery_img13.png'
import gallery_img14 from './../../../assets/images/gallery_img14.png'
import gallery_img15 from './../../../assets/images/gallery_img15.png'
import gallery_img16 from './../../../assets/images/gallery_img16.png'
import gallery_img17 from './../../../assets/images/gallery_img17.png'
import gallery_img18 from './../../../assets/images/gallery_img18.png'
import gallery_img19 from './../../../assets/images/gallery_img19.png'
import gallery_img20 from './../../../assets/images/gallery_img20.png'





import Eletrcial_img1 from './../../../assets/images/Eletrcial_img1.jpg'
import Eletrcial_img2 from './../../../assets/images/Eletrcial_img2.jpg'
import Eletrcial_img3 from './../../../assets/images/Eletrcial_img3.jpg'
import Eletrcial_img4 from './../../../assets/images/Eletrcial_img4.jpg'
import Eletrcial_img5 from './../../../assets/images/Eletrcial_img5.jpg'
import Eletrcial_img6 from './../../../assets/images/Eletrcial_img6.jpg' 




const civilImages = [gallery_img1, gallery_img2, gallery_img3,gallery_img4,gallery_img5,gallery_img6,gallery_img7,gallery_img8,gallery_img9,gallery_img10];
const electricalImages = [Eletrcial_img1, Eletrcial_img2, Eletrcial_img3, Eletrcial_img4, Eletrcial_img5, Eletrcial_img6];
const itImages = [gallery_img1, gallery_img2, gallery_img3,gallery_img4,gallery_img5,gallery_img6,gallery_img7,gallery_img8,gallery_img9,gallery_img10];

export function Gallerythumbnail() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // 🔹 Reusable render function
  const renderGallery = (images) => {
    const gallerySlides = images.map((src) => ({ src }));

    return (
      <>
        <div className="it_eventgallery_box">
          {images.map((img, i) => (
            <div className="it_event_items" key={i}>
              <div
                className="it_imgbox"
                onClick={() => {
                  setSlides(gallerySlides);
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <LazyLoadImage effect="blur" src={img} alt={`Image ${i + 1}`} />
              </div>
              <div className="it_event_contnets">
                <h4>Being part of</h4>
                <h6>Indore</h6>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="it_eventgallery_main">
      <Container>
        <Heading
          headbg="Events"
          headtext="Events at MDP Infra"
          subheadtext="Being part of our team"
          textAlign="text-center"
        />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Civil event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(civilImages)}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Electrical event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(electricalImages)}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>IT event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(itImages)}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Lightbox Component */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          plugins={[Thumbnails]}
        />
      </Container>
    </section>
  );
}


















// ______________________________ Civil Thumbnail ________________________________________
// ______________________________ Civil Thumbnail ________________________________________


export function Civilthumbnail() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // 🔹 Reusable render function
  const renderGallery = (images) => {
    const gallerySlides = images.map((src) => ({ src }));

    return (
      <>
        <div className="it_eventgallery_box">
          {images.map((img, i) => (
            <div className="it_event_items" key={i}>
              <div
                className="it_imgbox"
                onClick={() => {
                  setSlides(gallerySlides);
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <LazyLoadImage effect="blur" src={img} alt={`Image ${i + 1}`} />
              </div>
              <div className="it_event_contnets">
                <h4>Being part of</h4>
                <h6>Indore</h6>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="it_eventgallery_main">
      <Container>
        <Heading
          headbg="Events"
          headtext="Events at MDP Infra"
          subheadtext="Being part of our team"
          textAlign="text-center"
        />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Civil event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(civilImages)}</Accordion.Body>
          </Accordion.Item>

          {/* <Accordion.Item eventKey="1">
            <Accordion.Header>Electrical event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(electricalImages)}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>IT event gallery</Accordion.Header>
            <Accordion.Body>{renderGallery(itImages)}</Accordion.Body>
          </Accordion.Item> */}
        </Accordion>

        {/* Lightbox Component */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          plugins={[Thumbnails]}
        />
      </Container>
    </section>
  );
}




// ______________________________ Civil Thumbnail ________________________________________
// ______________________________ Civil Thumbnail ________________________________________

















// ______________________________Eletrical Thumbnail ________________________________________


import ele_galleryimg1 from './../../../assets/images/Eletrcial_img1.jpg'
import ele_galleryimg2 from './../../../assets/images/Eletrcial_img2.jpg'
import ele_galleryimg3 from './../../../assets/images/Eletrcial_img3.jpg'
import ele_galleryimg4 from './../../../assets/images/Eletrcial_img4.jpg'
import ele_galleryimg5 from './../../../assets/images/Eletrcial_img5.jpg'
import ele_galleryimg6 from './../../../assets/images/Eletrcial_img6.jpg'


export function Eletricalthumbnail() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: ele_galleryimg1, title: "Eletrical Event", subtitle: "Indore" },
        { src: ele_galleryimg2, title: "Successful Installation", subtitle: "Bhopal" },
        { src: ele_galleryimg3, title: "Electrical Project", subtitle: "Delhi" },
        { src: ele_galleryimg4, title: "Power Setup", subtitle: "Mumbai" },
        { src: ele_galleryimg5, title: "Power Setup", subtitle: "Mumbai" },
        { src: ele_galleryimg6, title: "Power Setup", subtitle: "Mumbai" },
    ];


    // const slides = images.map((src) => ({ src }));
    // const slides = images.map((img) => ({ src: img.src }));
    const slides = images.map((img) => ({
        src: img.src,
        title: img.title,
        description: img.subtitle,
    }));

    return (
        <>
            <div>
                <section className='it_eventgallery_main'>
                    <Container>

                        <Heading headbg="Events" headtext="Our Eletrical Events" subheadtext="Our Eletrical Events gallery" textAlign="text-center" />
                        <div className='it_eventgallery_box'>
                            {images.map((img, i) => (
                                <div className='it_event_items'>
                                    <div className='it_imgbox' onClick={() => {
                                        setIndex(i);
                                        setOpen(true);
                                    }}>
                                        <LazyLoadImage effect="blur"
                                            key={i}
                                            src={img.src}
                                            alt={`Image ${i + 1}`}

                                        />
                                    </div>
                                    <div className='it_event_contnets'>
                                        <h4>{img.title}</h4>
                                        <h6>{img.subtitle}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={slides}
                            index={index}
                            plugins={[Thumbnails]}
                        />
                    </Container>
                </section>
            </div>
        </>
    );
};



export default Gallerythumbnail