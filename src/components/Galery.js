import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const images = [
    { id: 1, src: './images/my anjay.jpg', alt: 'Kon', loading: 'blur' },
    { id: 2, src: './images/IMG_20230529_192928.jpg', alt: 'Ngoding di Kertas???', loading: 'blur' },
    { id: 3, src: './images/IMG_20230608_175838_2.jpg', alt: 'Car1', loading: 'blur' },
    { id: 4, src: './images/IMG_20230613_174718.jpg', alt: 'Car2', loading: 'blur' },
    { id: 5, src: './images/IMG_20230502_152114_1.jpg', alt: 'Daun Pohon', loading: 'blur' },
    { id: 6, src: './images/IMG_20230508_002855_1.jpg', alt: 'Lampu Controller', loading: 'blur' },
    { id: 7, src: './images/IMG_20230620_155156.jpg', alt: 'Mouse', loading: 'blur' },
    { id: 8, src: './images/Picsart_23-06-24_17-08-20-888.jpg', alt: 'Become a JOJO', loading: 'blur' },
    { id: 9, src: './images/N69.jpg', alt: 'N69', loading: 'blur' },
    { id: 10, src: './images/N69 FCK.jpg', alt: 'N69 FVCK', loading: 'blur' },
    { id: 11, src: './images/kodok acumalaka sad.jpg', alt: 'Kodok Acumalaka Sad', loading: 'blur' },
    { id: 12, src: './images/skinnyn69.jpg', alt: 'SkinnyN69', loading: 'blur' }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };

  return (
    <div className="gallery-bg" id='gallery'>
      <div data-aos="zoom-in-up">
        <h1 className="gallery-font">Gallery</h1>
          <h5 className="gallery-font">Picture</h5>
      </div>
      <div className="gallery" data-aos="zoom-out">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex].src}
          onCloseRequest={closeLightbox}
          imageCaption={images[lightboxIndex].alt}
          nextSrc={images[(lightboxIndex + 1) % images.length].src}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length].src}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
