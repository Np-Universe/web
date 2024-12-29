function ProjectItem(props) {

    return (
        <div class="card mb-3 project-i text-light" data-aos="fade-up">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.img} class="img-fluid rounded-start imgproj" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.judul}</h5>
        <p class="card-text">{props.deskripsi}</p>
        <p class="card-text text-project-anjay"><small>{props.date}</small></p>
        <a target="_blank" href={props.href} class="btn btn-link text-light" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }}>Go</a>
      </div>
    </div>
  </div>
</div>
        

    )
}

export default ProjectItem