import React, { useState, useEffect } from "react";

function Navbar({ setIsAdmin }) {
  const [sticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const correctAdminCode = "nplays4554";

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminCode === correctAdminCode) {
      setIsAdmin(true);
      setShowModal(false);
      setAdminCode("");
    } else {
      alert("Kode admin salah!");
    }
  };

  return (
    <>
      <nav className={`${sticky ? "sticky" : ""}`}>
        <div className="navbar navbar-expand-lg navbar-dark animate__animated animate__fadeInDown">
          <div className="container-sm">
            <a className="navbar-brand" href="https://np-universe.github.io/web">
              <img src='./images/np logo.png' width="40" height="35" className="d-inline-block align-text-top" alt="NP Universe Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#intro">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutme">AboutMe</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-light" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }} onClick={() => setShowModal(true)}>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog" style={{ backdropFilter: "blur(10px)" }}>
            <div className="modal-content" style={{ background: "rgba(255, 255, 255, 0.1)", position: "relative" }}>
              <button type="button" className="close" onClick={() => setShowModal(false)} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "1050", color: "#000", background: "none", border: "none" }}>
                <span>&times;</span>
              </button>
              <div className="modal-header text-light">
                <h5 className="modal-title">Admin Login</h5>
              </div>
              <div className="modal-body text-light">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="adminCode">Kode Admin</label>
                    <input
                      type="password"
                      className="form-control"
                      id="adminCode"
                      value={adminCode}
                      onChange={(e) => setAdminCode(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
