import React, { useState, useEffect } from 'react';

const GalleryV = () => {
    const videos = [
        { id: 1, src: './videos/ciduk quotes.mp4', title: 'Ciduk Quotes', description: 'Ciduk Warior Quotes' },
        { id: 2, src: './videos/obito tak segampang itu rock version edit.mp4', title: 'Obito Tak Segampang Itu (Rock Version)', description: 'Obito Tak Segampang Itu (Rock Version)' },
        { id: 3, src: './videos/N69 Fuck This Love Story ig public.mp4', title: 'N69 Fuck This Love Story', description: 'N69 Fuck This Love Story' },
        { id: 4, src: './videos/N69 FCK.mp4', title: 'N69 FCK', description: 'N69 FCK' },
        { id: 5, src: './videos/i cant stop the loneliness.mp4', title: 'I Can’t Stop the Loneliness', description: 'I Can’t Stop the Loneliness' },
        { id: 6, src: './videos/a thousand year speed up edit.mp4', title: 'A Thousand Year (Speed Up Edit)', description: 'A Thousand Year (Speed Up Edit)' },
        { id: 7, src: './videos/skinnyn69 angjai.mp4', title: 'SkinnyN69', description: 'SkinnyN69' },
        { id: 8, src: './videos/jadi badut ig ver.mp4', title: 'Jadi Badut Njir', description: 'Jadi Badut Njir' },
        { id: 9, src: './videos/take me back to the night we meet.mp4', title: 'Susah Tidur hari ke 69', description: 'Susah Tidur hari ke 69' },
        { id: 10, src: './videos/update project SR 2.3.mp4', title: 'Update Project SR 2.3', description: 'Update Project SR 2.3 New Update displaying text "MIDNIGHT" when "00:00" and if time is "00:00" display will reset to normal display' },
        { id: 11, src: './videos/air keruh di balas air mani.mp4', title: 'Air Keruh di Balas Air Mani', description: 'Blud memberikan sedikit kejahilan kecil dengan melistrik blud lainnya, lantas blud yang di listrik oleh blud ke satu membalas dengan memberinya sebutir peluru 9MM tepat ke arah kepala blud' },
        { id: 12, src: './videos/awokawokawokawokawok.mp4', title: 'Giveaway Stiker NFC', description: 'Blud memberikan stiker NFC secara cuma cuma kepada teman blud, akan tetapi stiker NFC tersebut meledak mengenai mobil blud lainnya, dan blud enggan untuk mengganti kerugian yang di alami oleh blud lain'},
        { id: 13, src: './videos/ketawa kek hampir meninggal njing.mp4', title: 'Ketawa Akhir Hayat', description: 'Orang sesak nafas dipaksa ketawa sama keadaan'},
        { id: 14, src: './videos/1.mp4', title: 'Cupang Jawa', description: 'Cupang hitam legam manis aseli majalengka'},
        { id: 15, src: './videos/Base Profile 2023.08.20 - 20.46.51.03.DVR.mp4', title: 'Mada Kono Sekaiwa', description: 'Bang lari bang ada meteor, Mada Kono Sekaiwa, anjir wibu'},
        { id: 16, src: './videos/Central Cee - Let Go.mp4', title: 'Let GO', description: 'Central Cee - Let Go'},
        { id: 17, src: './videos/TPL BM OTP  London View.mp4', title: 'London View', description: 'TPL BM OTP - London View'},
        { id: 18, src: './videos/mockingbird(remix).mp4', title: 'Mockingbird(Remix)', description: '3x3 - Mockingbird(Remix)'},
    ];

    const [currentVideo, setCurrentVideo] = useState(null);
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        const loadThumbnails = async () => {
            const thumbnailsTemp = {};
            for (const video of videos) {
                thumbnailsTemp[video.id] = await getVideoThumbnail(video.src);
            }
            setThumbnails(thumbnailsTemp);
        };

        loadThumbnails();
    }, []);

    const openModal = (video) => {
        setCurrentVideo(video);
    };

    const closeModal = () => {
        setCurrentVideo(null);
    };

    const getVideoThumbnail = (videoSrc) => {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.setAttribute('preload', 'metadata');

        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                video.currentTime = 1;
                video.onseeked = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const thumbnail = canvas.toDataURL('image/png');
                    resolve(thumbnail);
                };
            };
        });
    };

    return (
        <div className="galleryv-bg" id='gallery'>
            <div data-aos="zoom-in-up">
                <h5 className="galleryv-font">Video</h5>
            </div>
            <div className="galleryv" data-aos="zoom-out">
                {videos.map((video) => (
                    <div key={video.id} className="video-container">
                        <img
                            src={thumbnails[video.id]}
                            alt={video.title}
                            className="thumbnail"
                            onClick={() => openModal(video)}
                        />
                        <div className="video-info">
                            <h6 className="video-title">{video.title}</h6>
                            <p className="video-description">{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {currentVideo && (
                <div className="modal-galleryv">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <video src={currentVideo.src} controls autoPlay className="modal-video" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryV;