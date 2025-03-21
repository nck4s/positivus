import "./styles/TestimonialCard.css";

const TestimonialCard = ({ text, name, role }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-footer">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-role">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
