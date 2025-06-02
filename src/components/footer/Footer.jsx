import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer data-aos = "fade-up" data-aos-delay = "200">
      <a href="#" className="footer-logo">
        Wajd Heshme
      </a>
      <span>Titos</span>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/wajd.heshme?mibextid=ZbWKwL">
          <i class="fa-brands fa-facebook"><FaFacebookF /></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"><MdOutlineAttachEmail /></i>
        </a>
        <a href="https://github.com/WajdMHeshme">
          <i class="fa-brands fa-github"><FiGithub /></i>
        </a>
      </div>

      <div className="footer-copyright">
        <p>
          &copy; <a href="#">WajdHeshme</a>All rights reserved
        </p>
      </div>
    </footer>
  );
}
