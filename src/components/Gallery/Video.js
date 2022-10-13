import ReactImageVideoLightbox from "react-image-video-lightbox";
import { useState } from "react";
import {data} from '../Alldata';
import"./Gallery.css"
import"../Home/Home"
import Pagetitle from "../Pagetitle";
export default function Video() {
  const [open, setopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openlightbox = (index) => {

    setCurrentIndex(index);
    setopen(true);
  };
  return (
    <>
        <Pagetitle title="VIDEO GALLERY" />
<section className="videoglry">
<div className="container">
    <div className="row">
  
      {data.map((item, index) => {
        return   <div className="col-lg-4" key={index}>
      <div className="videothumb">
      <img src={item.thumbnail} onClick={() => openlightbox(index)} />
      </div>
        </div>
      })}
<div className="opens">
      {open && (
        <ReactImageVideoLightbox
          data={data}
          startIndex={currentIndex}
          showResourceCount={true}
          onCloseCallback={() => setopen(false)}
          onNavigationCallback={(currentIndex) =>
            console.log(`Current index: ${currentIndex}`)
          }
        />
      )}
  </div>
    </div>
   </div>
</section>
    </>
  );
}
