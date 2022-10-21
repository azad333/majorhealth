import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import Pagetitle from "../Pagetitle";
const Video=()=> {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
   {
    id: '1',
    size: '1280-720',
    poster:
      '../img/hqdefault.jpg',
    src: 'https://www.youtube.com/embed/7jSGF2vLDpA',
    thumb:
      '../img/hqdefault.jpg&auto=format&fit=crop&w=240&q=80',
    subHtml: `<div class="lightGallery-captions">
             
              <p>Published on November 13, 2018</p>
          </div>`,
      },
      {
        id: '2',
        size: '1280-720',
        poster:
          '../img/hqdefault.jpg',
        src: 'https://www.youtube.com/embed/JMoJuwP3twQ',
        thumb:
          '../img/hqdefault.jpg&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                 <p>Published on November 13, 2018</p>
              </div>`,
      },
      {
        id: '3',
        size: '1280-720',
        poster:
          '../img/medical.jpg',
        src: 'https://www.youtube.com/embed/5UQXo627L2A',
        thumb:
          '../img/medical.jpg&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                 <p>Published on November 13, 2018</p>
              </div>`,
      },
      {
        id: '4',
        size: '1280-720',
        poster:
          '../img/video1.jpg',
        src: 'https://www.youtube.com/embed/wA0JIHm5s7A',
        thumb:
          '../img/video1.jpg&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                 <p>Published on November 13, 2018</p>
              </div>`,
      },
      {
        id: '5',
        size: '1280-720',
        poster:
          '../img/video2.jpg',
        src: 'https://www.youtube.com/embed/xRC53iriC-w',
        thumb:
          '../img/video2.jpg&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                 <p>Published on November 13, 2018</p>
              </div>`,
      },
      {
        id: '6',
        size: '1280-720',
        poster:
          '../img/video3.jpg',
        src: 'https://www.youtube.com/embed/SiGHpVVAGaY',
        thumb:
          '../img/video3.jpg&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                 <p>Published on November 13, 2018</p>
              </div>`,
      },
      
  ]);



  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        
          <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item width"
          data-src={item.src}
        >
          <img
            style={{ maxWidth: '280px' }}
            className="img-responsive"
            src={item.poster} alt={item.id}
          />
        </a>
   
      );
    });
  }, [items]);

  useEffect(() => {
    lightGallery.current.refresh();
    console.log('videl', lgVideo);
  }, [items]);

  return (
    <>
      <Pagetitle title="VIDEO GALLERY" />
    <section className='ourservices'>
    <div className='container'>
        <div className='row'>
    
      <LightGallery
        plugins={[lgVideo, lgZoom]}
        elementClassNames="custom-class-name"
        onInit={onInit}
      >
        {getItems()}
      </LightGallery>
 </div>
 </div></section>
    </>
  );
}

export default Video
