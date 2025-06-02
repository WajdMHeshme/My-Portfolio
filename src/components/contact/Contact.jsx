import { useRef } from "react";
import "./Contact.css";
import { BsEnvelopeAt } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
const ContactData = [
  {
    id: 1,
    icon: <BsEnvelopeAt />,
    title: "Email",
    info: "wajdtitos@gmail.com",
    dataAos: "fade-right",
    delay: "100",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Wajd Heshme",
    dataAos: "fade-right",
    delay: "200",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "+963937826470",
    dataAos: "fade-right",
    delay: "300",
  },
];

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g03b7mb",
      "template_5pymvlf",
      form.current,
      "gN9ghTmdg35C5uzHC"
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact-container">
        <div className="contact-options">
          {ContactData.map(({ id, icon, title, info, dataAos, delay }) => (
            <article
              key={id}
              className="contact-option"
              data-aos={dataAos}
              data-aos-delay={delay}
            >
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            data-aos="fade-left"
            data-aos-delay="100"
            type="text"
            placeholder="Full Name"
            name="name"
          />
          <input
            data-aos="fade-left"
            data-aos-delay="200"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <textarea
            data-aos="fade-left"
            data-aos-delay="300"
            rows={13}
            name="message"
            id=""
            placeholder="Enter Your Message "
          ></textarea>
          <button className="btn btn-primary" data-aos = "fade">Send Message </button>
        </form>
      </div>
    </section>
  );
}
