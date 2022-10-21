import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import Pagetitle from "../Pagetitle";
const Photogallery=()=> {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '600-338',
      src: '../img/1.png',
      thumb:
        '../img/1.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Person wearing shoes</p>
            </div>`,
    },
    {
      id: '2',
      size: '600-338',
      src: '../img/2.png',
      thumb:
        '../img/2.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Blonde woman wearing sunglasses smiling at the camera</p>
            </div>`,
    },
    {
      id: '3',
      size: '600-338',
      src: '../img/3.png',
      thumb:
        '../img/3.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Man and woman passing by store</p>
            </div>`,
    },
    {
      id: '4',
      size: '600-338',
      src: '../img/4.png',
      thumb:
        '../img/4.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    }, 
    {
      id: '5',
      size: '600-338',
      src: '../img/5.png',
      thumb:
        '../img/5.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    },
    {
      id: '6',
      size: '600-338',
      src: '../img/6.png',
      thumb:
        '../img/6.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    },
    {
      id: '7',
      size: '600-338',
      src: '../img/7.png',
      thumb:
        '../img/7.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    }, 
    {
      id: '8',
      size: '600-338',
      src: '../img/8.png',
      thumb:
        '../img/8.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    },  
    {
      id: '9',
      size: '600-338',
      src: '../img/9.png',
      thumb:
        '../img/9.png&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <p>Jaipur , Rajasthan India</p>
            </div>`,
    }, 
  ]);

  const addItem = useCallback(() => {
    setItems([
      ...items,
      {
        id: '4',
        size: '1400-933',
        src: 'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
        thumb:
          'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
                <p>Published on January 6, 2021</p>
            </div>`,
      },
      {
        id: '5',
        size: '1600-2398',
        src: 'https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80',
        thumb:
          'https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
            <p>Published on January 6, 2021</p>
        </div>`,
      },
    ]);
  }, []);

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
            src={item.src} alt={item.id}
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
      <Pagetitle title="Image GALLERY" />
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

export default Photogallery
