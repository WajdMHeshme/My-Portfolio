import { FaFacebookF, FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './homeSocials/'
const HomeSocials = () => {
  return (
    <div className="home-socials mobile-view">
      <a href="https://www.facebook.com/wajd.heshme?mibextid=ZbWKwL" target="_blank"><FaFacebookF /></a>
      <a href="https://github.com/WajdMHeshme" target="_blank"><FaGithub /></a>
      <a href="" target="_blank"><FaCode /></a>
    </div>
  );
};

export default HomeSocials;
