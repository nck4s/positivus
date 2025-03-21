import "./styles/Hero.css";
import heroImage from "../../assets/hero-image.png"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Текстовая часть */}
        <div className="hero-text">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed online through a range of 
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="hero-btn">Book a consultation</button>
        </div>

        {/* Изображение */}
        <div className="hero-image">
          <img src={heroImage} alt="Megaphone" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
