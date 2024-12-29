import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

function AboutMe() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedAvatarIndex(index);
    setIsLightboxOpen(true);
  }

  const closeLightbox = (index) => {
    setIsLightboxOpen(false);
  }

  return (
    <div className="section aboutme" id="aboutme">
      <div className="row align-items-center avatarb aboutme-bg">
        <div className="col-5 text-center">
          <div>
            <img
            className="avatar-a" data-aos="fade-up"
            src="./images/WIN_20240203_19_42_19_Pro copyaa.jpg"
            onClick={() => openLightbox(0)}
          />
          </div>
        </div>
        <div className="col-5 aboutme-t" data-aos="fade-left">
          <h1>About Me</h1>
          <p>
            "Yooow nama gw Andreas, Nauvel Andreas Amaluih, gw lahir di Jombang Jawa Timur 21-November-2006, hobi gw Gaming, yaa basic gw emang kek anak muda nolep kebanyakan yaitu ngeGame. Selain ngeGame gw juga punya hobi coding dikit dikit, dan bahasa pemrograman yang pernah gw coba Java Script, C++(Arduino), Python, ama Pascal. Dah sih keknya gitu doang ae buat tab About Me, gatau mau ngetik apa lagi."
          </p>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          mainSrc='./images/WIN_20240203_19_42_19_Pro copyaa.jpg'
          onCloseRequest={closeLightbox}
          />
      )}
    </div>
  );
}

export default AboutMe;
