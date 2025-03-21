import "./styles/ServiceCard.css";

const ServiceCard = ({ title, image, bgColor }) => {
  return (
    <div className={`service-card ${bgColor}`}>
      <div className="service-content">
        <h3>{title}</h3>
        <button className="learn-more">Learn more →</button>
      </div>
      <img src={image} alt={title} className="service-image" />
    </div>
  );
};

export default ServiceCard;
