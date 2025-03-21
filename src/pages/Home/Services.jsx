import "./styles/Services.css";
import ServiceCard from "./ServiceCard";
import seo from "../../assets/images/seo.png";
import ppc from "../../assets/images/ppc.png";
import socialMedia from "../../assets/images/social-media.png";
import email from "../../assets/images/email.png";
import content from "../../assets/images/content.png";
import analytics from "../../assets/images/analytics.png";

// Данные о сервисах
const services = [
  { title: "Search engine optimization", image: seo, bgColor: "white" },
  { title: "Pay-per-click advertising", image: ppc, bgColor: "green" },
  { title: "Social Media Marketing", image: socialMedia, bgColor: "black" },
  { title: "Email Marketing", image: email, bgColor: "white" },
  { title: "Content Creation", image: content, bgColor: "green" },
  { title: "Analytics and Tracking", image: analytics, bgColor: "black" },
];


const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help 
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
