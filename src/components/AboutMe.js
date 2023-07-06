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
      <div className="row align-items-center">
        <div className="col-5 text-center">
          <img
            className="avatar-a"
            src="https://i.ibb.co/M8C39dP/web-intro-my-anjay.jpg"
            onClick={() => openLightbox(0)}
          />
        </div>
        <div className="col-5 aboutme-t" id="aboutme">
          <h1>About Me</h1>
          <p>
            "Saya adalah seorang manusia yang sangat tampan dan keren, dan mempunyai kelebihan tidak terkena dampak apa-apa ketika tidak melakukan kegiatan apapun selama 24 jam.
            Saya juga seorang gamer, gamer tampan lebih tepatnya. Game yang sering saya mainkan antara lain Gta V, Minecraft, Fortnite."
          </p>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          mainSrc='https://i.ibb.co/M8C39dP/web-intro-my-anjay.jpg'
          onCloseRequest={closeLightbox}
          />
      )}
    </div>
  );
}

export default AboutMe;
