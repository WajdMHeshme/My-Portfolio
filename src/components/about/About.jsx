import "./About.css";
import AboutImg from '../../assets/img/photo_2025-05-30_19-54-52-removebg-preview.png'
export default function About() {
    
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div data-aos = "fade-right" className="about-me-img">
            <img src={AboutImg} alt="aboutImage!" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div data-aos = "fade-up" data-aos-delay="100" className="about-card">
              <i className="fa-solid fa-award about-icon"></i>
              <h5>Experience</h5>
              <p>1+ years working</p>
            </div>
            <div data-aos = "fade-up" data-aos-delay="200" className="about-card">
              <i class="fa-solid fa-users about-icon"></i>
              <h5>Clients</h5>
              <p>200+ worldwide </p>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300" className="about-card">
              <i class="fa-solid fa-folder-tree about-icon"></i>
              <h5>Projects</h5>
              <p>20+ Completed</p>
            </div>
          </div>
          <p className="p" data-aos= "fade" data-aos-delay="300" >
            I am a Computer Engineering student at Latakia University and a
            Front-End intern at Focal X. I am passionate about developing modern
            web applications and constantly strive to expand my skills and stay
            updated with the latest technologies in the field. I enjoy working
            in a team environment and believe in delivering outstanding user
            experiences through effective design and high performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
