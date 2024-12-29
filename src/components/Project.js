import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemWL from "./ProjectItemWL";

function Project({ isAdmin }) {
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([
        {
            img: "https://i.ibb.co/hsppS1H/logo-bot-wa.jpg",
            judul: "Bot WA (UPDATED)",
            deskripsi: "Buat gabut gabutan aja oke nih bang:) (ada kode nuklirnya juga lhooo :o)",
            date: "21-11-2022",
            href: "https://api.whatsapp.com/send/?phone=6285136822818&text&type=phone_number&app_absent=0",
        },
        {
            img: "./images/setengah wajahku berubah menjadi animeh.png",
            judul: "Berubah Jadi Anime I",
            deskripsi: "Setengah wajahku berubah jadi anime coyyyy😱😱😱, sepertinya saya akan menjadi anime seutuhnya dan menjadi MC anime yang sangat overpower. Dengan ini kesempatanku untuk menjadi Raja Iblis dan menguasai dunia anime sangatlah besar HAHAHAHAHAHAHA!!!!.",
            date: "09-01-2023",
        },
        {
            img: "./images/Logo Np 2-2-2023.png",
            judul: "Berubah Jadi Anime II (*Ternyata😱😱😱)",
            deskripsi: "Kukira saya akan menjadi anime seutuhnya, setelah setengah wajah saya menjadi anime, TERNYATA!!! saya hanya menjadi icon website saya sendiri (icon yang lama pake logo ini cuy...). tch mendoksai😡😡🤬🤬.",
            date: "10-01-2023",
        },
        {
            img: "https://th.bing.com/th/id/OIP.9Rp8v9Va_rpb6Kk8z6OFhgHaEK?pid=ImgDet&rs=1",
            judul: "Finally",
            deskripsi: "Finally I have a girlfriend:)",
            date: "27-05-2023",
        },
        {
            img: "https://i.ibb.co/QkBhBLF/IMG-20230601-071045-1.jpg",
            judul: "Kereta",
            deskripsi: "Foto kereta random, difoto dengan kamera hp pake settingan ngasal asal cekrek tapi menurut gw bagus jadi gw masukin ke blog gw (hihihiha), dan ini juga foto dari pengalaman gw keluar rumah bareng temen setelah sekian lama meng-nolep akhirnya keluar rumah. Dah gitu ae:)",
            date: "01-06-2023",
        },
        {
            img: "./images/OIP.jpg",
            judul: "We Break Up",
            deskripsi: "Kontol",
            date: "11-08-2023",
        },
        {
            img: "./images/logo channel justenpi.jpg",
            judul: "Logo Baru Np",
            deskripsi: "Yoooow logo baru gw nich, new years new logo gasih, logo baru ini gw buat sesimpel mungkin, karena apa? karena semakin majunya perkembangan zaman semua hal menjadi simpel termasuk logo, nah maka dari itu logo yang gw buat kali ini sangatlah simpel, dengan background warna biru tua, yang wich is tua nya tua banget(gw gatau itu wana biru apa njir), dan selain gara gara mengikuti perkembangan zaman yang apa apa semakin simpel, alasan gw buat logo sesimpel itu sebenernya gara gara gw males ae sih mikirin design yang terlalu kompleks😐.",
            date: "05-04-2024"
        },
        {
            img: "./images/Project SR.jpg",
            judul: "Project SR",
            deskripsi: "Project SR adalah project yang baru saja gw buat, arti dari SR adalah 'Smart Room', fungsi dari project ini untuk mengendalikan lampu dan kipas, selain mengendalikan lampu dan kipas, project ini juga menampilkan waktu, hari, tanggal, bulan, dan tahun. Project ini menggunakan Google Home untuk mengendalikan lampu dan kipas, alasan kenapa gw menggunakan Google Home untuk mengendalikan lampu dan kipas agar bisa memberikan timer jam berapa device hidup dan mati. Project ini menggunakan ESP8266(IoT), dan menggunakan library SinricPro untuk menyambungkan ke Google Home.",
            date: "12-06-2024"
        },
        {
            img: "./images/Trailer SMP.png",
            judul: "Trailer SMP",
            deskripsi: "Trailer SMP adalah server Minecraft yang gw bikin, nih server gw bikin cuma gabut aja sih, buat bisa main sama orang random yang join server gw juga actually, dan ternyata tanpa di duga duga komunitas server gw mulai berkembang njir, sekarang udah ada 18 member(termasuk gw) mungkin bakal nambah lagi, world di server juga udh mulai idup, sheeesh. mungkin lu yang baca ini pengen masuk ke server gw bisa masukin ip sama port server ini IP Address : 180.ip.ply.gg Port : 39776. oke gitu ae cihuuuyy.",
            date: "29-07-2024"
        }
    ]);

    const [newPost, setNewPost] = useState({
        img: "",
        judul: "",
        deskripsi: "",
        date: "",
        href: "",
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewPost({ ...newPost, img: URL.createObjectURL(file) });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = formatDate(newPost.date);
        const updatedProjects = [
            ...projects,
            { ...newPost, date: formattedDate },
        ];
        setProjects(updatedProjects);
        setNewPost({ img: "", judul: "", deskripsi: "", date: "", href: "" });
        setImagePreview(null);
        setShowModal(false);
    };

    return (
        <div className="section text-light project">
            <div className="container">
                <div data-aos="zoom-in-up">
                    <h1 className="mt-3 col-12 project-gabut" id="project">Blog</h1>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
                        project.href ? (
                            <ProjectItem
                                key={index}
                                img={project.img}
                                judul={project.judul}
                                deskripsi={project.deskripsi}
                                date={project.date}
                                href={project.href}
                            />
                        ) : (
                            <ProjectItemWL
                                key={index}
                                img={project.img}
                                judul={project.judul}
                                deskripsi={project.deskripsi}
                                date={project.date}
                            />
                        )
                    ))}
                </div>
                {isAdmin && (
                    <button className="nav-link btn btn-link text-light" onClick={() => setShowModal(true)} style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }}>Post</button>
                )}
            </div>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog" style={{ backdropFilter: "blur(10px)" }}>
                        <div className="modal-content" style={{ background: "rgba(255, 255, 255, 0.1)", position: "relative" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">New Post</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "1050", color: "#000", background: "none", border: "none" }}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="img">Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="img"
                                            name="img"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            required
                                        />
                                        {imagePreview && (
                                            <img src={imagePreview} alt="Preview" className="img-thumbnail mt-2" />
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="judul">Judul</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="judul"
                                            name="judul"
                                            value={newPost.judul}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="deskripsi">Deskripsi</label>
                                        <textarea
                                            className="form-control"
                                            id="deskripsi"
                                            name="deskripsi"
                                            value={newPost.deskripsi}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            value={newPost.date}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="href">Link (optional)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="href"
                                            name="href"
                                            value={newPost.href}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
