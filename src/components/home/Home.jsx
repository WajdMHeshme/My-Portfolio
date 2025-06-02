import myImg from "../../assets/img/photo_2025-05-31_13-17-42-removebg-preview.png";
import HomeSocials from './HomeSocials.jsx/'
import { TbArrowBigRightLinesFilled } from "react-icons/tb"
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="container home-container">
        <h4 data-aos="fade-down" data-aos-delay="200">Hello I'm</h4>
        <h1 data-aos="fade-down" data-aos-delay="400">Wajd Heshme</h1>
        <h4 data-aos="fade-down" data-aos-delay="600" className="text-light">Frontend Web Developer</h4>
        <div className="btns">
          <a href="#" className="btn">
            DownLoad CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img data-aos="zoom-out" data-aos-delay="800" src={myImg} alt="my image" />
        </div>
        <a href="#about" className="scroll_down">Scroll Down <TbArrowBigRightLinesFilled /></a>
        <HomeSocials />
      </div>
    </div>
  );
};

export default Home;
