import React, { useState, useEffect, useCallback } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

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

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <div>
      <div>
      <Particles
      className="particles-bg"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "none",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#00a8ff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
      </div>
      <div className="section text-light intro" id="intro">
      <div className="container text-center">
        <div className="avatar-container">
          <div>
            <img
              className="avatar animate__animated animate__fadeIn"
              src="./images/WIN_20240203_19_42_19_Pro copyaa.jpg"
              onClick={() => openLightbox(0)}
            />
            <h1 className='animate__animated animate__fadeInUp'>Andreas</h1>
            <p className='animate__animated animate__fadeInUp'>Raja Iblis 😈</p>
            <div className="socialmedia animate__animated animate__fadeInUp">
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
            <div className="clock avatar animate__animated animate__fadeIn">{timeAndreas}</div>
            <p className='animate__animated animate__fadeInUp'>( WIB )</p>
          </div>
          {/* <div>
            <img
              className="avatar animate__animated animate__fadeIn"
              src="https://i.ibb.co/10n0g7Q/342383964-245734041348997-1702115803396386553-n.jpg"
              src='./images/ratu iblis.jpg'
              onClick={() => openLightbox(1)}
            />
            <h1 className='animate__animated animate__fadeInUp'>Freya</h1>
            <p className='animate__animated animate__fadeInUp'>Ratu Iblis 😈</p>
            <div className="socialmedia animate__animated animate__fadeInUp">
              <a target="_blank" href="https://www.instagram.com/lipai2121/">
              <i className="bi bi-instagram"></i>
              </a>
              <a target="_blank" href="">
              <i className="bi bi-whatsapp"></i>
              </a>
              <a target="_blank" href="">
              <i className="bi bi-youtube"></i>
              </a>
            </div>
            <div className="clock avatar animate__animated animate__fadeIn">{timeFreya}</div>
            <p className='animate__animated animate__fadeInUp'>( WIT )</p>
          </div> */}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={
            selectedAvatarIndex === 0
              ? './images/WIN_20240203_19_42_19_Pro copyaa.jpg'
              : './images/ratu iblis.jpg'
          }
          onCloseRequest={closeLightbox}
        />
      )}
    </div>
  </div>
    
  );
}

export default Intro;
