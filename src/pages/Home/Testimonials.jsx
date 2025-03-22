import { useEffect, useState } from "react";
import "./styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads...",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus has helped our business achieve outstanding results through their digital marketing strategies...",
    name: "Jane Doe",
    role: "CEO of ABC Solutions",
  },
  {
    text: "The expertise and dedication of the Positivus team have significantly contributed to our growth and success in the digital market...",
    name: "Michael Brown",
    role: "Head of Marketing at DEF Ltd",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // ✅ Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000); // смена каждые 5 секунд

    return () => clearInterval(interval); // очистка при размонтировании
  }, [currentIndex]); 

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

      <div className="testimonial-slider">
        <button className="nav-arrow left" onClick={prevTestimonial}>←</button>

        <TestimonialCard {...testimonials[currentIndex]} />

        <button className="nav-arrow right" onClick={nextTestimonial}>→</button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
