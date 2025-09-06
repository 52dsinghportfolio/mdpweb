import React from 'react';
import './gallery.css';
import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import gallerybg from './../../assets/images/galleryimg.jpeg';
import Gallerythumbnail, { Civilthumbnail, Eletricalthumbnail } from '../../components/galleryComponents/eventThumbail';
import Pagebanner from '../../components/commonComponents/pageBanner/pagebanner';







export function Gallery() {
    return (
        <>
            <div>

                <Pagetitle titletext="Our Gallery" linktext="Gallery" bgcolor="#fff" imageUrl={gallerybg} />
                {/* <GalleryZoomSlider/> */}
                <Gallerythumbnail />  

            </div>
        </>
    )
}









 



import custructionimg from './../../assets/images/custructionimg.jpeg';

// import eventgallerybg from './../../assets/images/eventgallery.webp';

export function Civilgallery() {
    return (
        <>
            <div> 
                {/* <Pagetitle titletext="Our Eletrical Gallery" linktext="Gallery" bgcolor="#fff" imageUrl={gallerybg} /> */}
                {/* <GalleryZoomSlider/> */}
                <Pagebanner titletext="Our Civil Gallery" subtitletext="Our Civil Gallery showcases a wide range of successful projects, from infrastructure development to modern architectural designs. Each project reflects our dedication to quality, safety, and sustainability. With innovative engineering and strong execution, we create structures that shape communities and inspire progress" imageUrls={custructionimg} />  


                <Civilthumbnail /> 
            </div>
        </>
    )
}




import eventgallerybg from './../../assets/images/eventgallery.webp';

export function Eletricalallery() {
    return (
        <>
            <div> 
                {/* <Pagetitle titletext="Our Eletrical Gallery" linktext="Gallery" bgcolor="#fff" imageUrl={gallerybg} /> */}
                {/* <GalleryZoomSlider/> */}
                <Pagebanner titletext="Our Electrical Gallery" subtitletext="Explore our Electrical Gallery showcasing projects that highlight precision, safety, and innovation. From installations to large-scale power systems, these images reflect our expertise, advanced technology, and commitment to delivering reliable electrical solutions." imageUrls={eventgallerybg} />  


                <Eletricalthumbnail />
            </div>
        </>
    )
}



 



export default Gallery