import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Intro() {
  const [timeAndreas, setTimeAndreas] = useState('');
  const [timeFreya, setTimeFreya] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  useEffect(() => {
    const timerAndreas = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta' });
      setTimeAndreas(currentTime);
    }, 1000);

    const timerFreya = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jayapura' });
      setTimeFreya(currentTime);
    }, 1000);

    return () => {
      clearInterval(timerAndreas);
      clearInterval(timerFreya);
    };
  }, []);

  const openLightbox = (index) => {
    setSelectedAvatarIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="section text-light intro" id="intro">
      <div className="container text-center">
        <div className="avatar-container">
          <div>
            <img
              className="avatar"
              src="https://i.ibb.co/M8C39dP/web-intro-my-anjay.jpg"
              onClick={() => openLightbox(0)}
            />
            <h1>Andreas</h1>
            <p>Raja Iblis 😈</p>
            <div className="socialmedia">
              <a target="_blank" href="https://www.instagram.com/justenpi/">
                <i className="bi bi-instagram"></i>
              </a>
              <a target="_blank" href="http://bit.ly/3Exkpqz">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDSmZF7-Ys8YQ2ziWrHf4_Q"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <div className="clock">{timeAndreas}</div>
            <p>( WIB )</p>
          </div>
          <div>
            <img
              className="avatar"
              src="https://i.ibb.co/10n0g7Q/342383964-245734041348997-1702115803396386553-n.jpg"
              onClick={() => openLightbox(1)}
            />
            <h1>Freya</h1>
            <p>Ratu Iblis 😈</p>
            <div className="socialmedia">
              {/* <a target="_blank" href="https://www.instagram.com/freyatj_/"> */}
                <i className="bi bi-instagram"></i>
              {/* </a> */}
              {/* <a target="_blank" href=""> */}
                <i className="bi bi-whatsapp"></i>
              {/* </a> */}
              {/* <a target="_blank" href=""> */}
                <i className="bi bi-youtube"></i>
              {/* </a> */}
            </div>
            <div className="clock">{timeFreya}</div>
            <p>( WIT )</p>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={
            selectedAvatarIndex === 0
              ? 'https://i.ibb.co/M8C39dP/web-intro-my-anjay.jpg'
              : 'https://i.ibb.co/10n0g7Q/342383964-245734041348997-1702115803396386553-n.jpg'
          }
          onCloseRequest={closeLightbox}
        />
      )}
    </div>
  );
}

export default Intro;
