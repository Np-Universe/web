import { useState, useEffect } from "react"


function Navbar() {
  
  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
        setSticky(window.scrollY > 0);
        console.log(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
    return (
          <nav className={`${sticky ? "sticky" : ""}`}>
              <div class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-sm">
    <a class="navbar-brand" href="/">
      <img src="https://i.ibb.co/s3BzNf8/Np-Universe-Logo.png" width="100" height="35" class="d-inline-block align-text-top"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#intro">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutme">AboutMe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#enpi">Enpi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">Gallery</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
    )
}

export default Navbar