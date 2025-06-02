import "./Skills.css";
import CSS from "../../assets/img/css3.svg";
import HTML from "../../assets/img/html-TYcbYgog.png";
import JS from "../../assets/img/javascript.svg";
import Bootstrap from "../../assets/img/bootstrap-BpbIbXh6.png";
import reactImg from "../../assets/react.svg";
import figma from "../../assets/img/figma.svg";
import Ts from "../../assets/img/Typescript_logo_2020.svg.png";
import GitHub from "../../assets/img/GitHub-Logo-s.png";
import NextJs from "../../assets/img/next-js.svg";
const SkillsData = [
  {
    id: 1,
    image: HTML,
    title: "HTML",
    disc: "Markup Language",
    delay: "100",
    dataAos: "fade-down-right",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
    disc: "User Interface",
    delay: "300",
    dataAos: "fade-down",
  },
  {
    id: 3,
    image: JS,
    title: "JavaScript",
    disc: "Interaction",
    delay: "500",
    dataAos: "fade-down-left",
  },

  {
    id: 4,
    image: reactImg,
    title: "React",
    disc: "Framework",
    delay: "700",
    dataAos: "fade-down-right",
  },
  {
    id: 5,
    image: Bootstrap,
    title: "Bootstrap",
    disc: "User Interface",
    delay: "900",
    dataAos: "fade-down",
  },
  {
    id: 6,
    image: figma,
    title: "Figma",
    disc: "Design tool",
    delay: "1100",
    dataAos: "fade-down-left",
  },
  {
    id: 7,
    image: Ts,
    title: "TypeScript",
    disc: "Safety",
    delay: "1300",
    dataAos: "fade-down-right",
  },
  {
    id: 8,
    image: GitHub,
    title: "Git&GitHub",
    disc: "Control",
    delay: "1500",
    dataAos: "fade-down",
  },
  {
    id: 9,
    image: NextJs,
    title: "NextJs",
    disc: "Soooon..",
    delay: "1700",
    dataAos: "fade-down-left",
  },
];
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {SkillsData.map(({ id, image, title, disc , delay , dataAos }) => (
          <article data-aos = {dataAos} data-aos-delay = {delay} key={id} className="card-skill">
            <div className="icon">
              <img src={image} alt="icon" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc} </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
