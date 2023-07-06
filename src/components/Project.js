import ProjectItem from "./ProjectItem"
import ProjectItemWL from "./ProjectItemWL"

function project() {

    return (
        <div className="section text-light project">
            <div className="container">
                <h1 className="mt-3 col-12 project-gabut">Blog</h1>
                <div className="row" id="project">
                    <ProjectItem
                        img="https://i.ibb.co/hsppS1H/logo-bot-wa.jpg"
                        judul="Bot WA"
                        deskripsi="Bot Wa adalah suatu program yang dapat membantu pengguna dengan tugas sehari hari, seperti membuatkan script dari bahasa pemrograman apapun, dan yang paling sering digunakan adalah fitur untuk membuat stiker whatsapp. Jika ingin menggunakan klik link di bawah ini"
                        date="21-Nov-2022"
                        href="http://bit.ly/3TBXpv8"
                    />
                  <ProjectItemWL
                        img="https://i.ibb.co/304VtR9/setengah-wajahku-menjadi-anime.png"
                        judul="Berubah Jadi Anime I"
                        deskripsi="Setengah wajahku berubah jadi anime coyyyy😱😱😱, sepertinya saya akan menjadi anime seutuhnya dan menjadi MC anime yang sangat overpower. Dengan ini kesempatanku untuk menjadi Raja Iblis dan menguasai dunia anime sangatlah besar HAHAHAHAHAHAHA!!!!."
                        date="9-Jan-2023"
                    />
                  <ProjectItemWL
                        img="https://i.ibb.co/wdGgCbf/ternyata-jadi-logo.png"
                        judul="Berubah Jadi Anime II (*Ternyata😱😱😱)"
                        deskripsi="Kukira saya akan menjadi anime seutuhnya, setelah setengah wajah saya menjadi anime, TERNYATA!!! saya hanya menjadi icon website saya sendiri. tch mendoksai😡😡🤬🤬."
                        date="10-Jan-2023"
                    />
                  <ProjectItemWL
                        img="https://th.bing.com/th/id/OIP.9Rp8v9Va_rpb6Kk8z6OFhgHaEK?pid=ImgDet&rs=1"
                        judul="Finally"
                        deskripsi="Finally i have a girlfriend:)"
                        date="27-May-2023"
                    />
                  <ProjectItemWL
                        img="https://i.ibb.co/QkBhBLF/IMG-20230601-071045-1.jpg"
                        judul="Kereta"
                        deskripsi="Foto kereta random, difoto dengan kamera hp pake settingan ngasal asal cekrek tapi menurut gw bagus jadi gw masukin ke blog gw (hihihiha), dan ini juga foto dari pengalaman gw keluar rumah bareng temen setelah sekian lama meng-nolep akhirnya keluar rumah. Dah gitu ae:)"
                        date="1-Jun-2023"
                    />
                </div>
              
                
            </div>
        </div>
        
    )
}

export default project