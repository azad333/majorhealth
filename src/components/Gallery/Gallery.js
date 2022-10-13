import React from "react";
import {images} from '../Alldata';
import"./Gallery.css"
import Pagetitle from "../Pagetitle";
import Lightroom from "react-lightbox-gallery";
const Galleryimage =() => {
  
  var settings = {
    columnCount: {
      default: 3,
      mobile:1,
      tab: 2
    },
    mode: "dark"
  };
  return (
   <>
     <Pagetitle title="GALLERY" />
      <section className="ourgallery">
      <div class="beforefater">
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
      <Lightroom images={images} settings={settings} />
    </div>
          </div>
        </div>
        </div>
      </section>
   </>
  );
}
export default Galleryimage