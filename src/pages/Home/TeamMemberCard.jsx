import "./styles/TeamMemberCard.css";
import linkedinIcon from "../../assets/images/linkedin.png"; // Импорт иконки

const TeamMemberCard = ({ name, role, description, image, linkedin }) => {
  return (
    <div className="team-card">
      <div className="image-wrapper">
        <img src={image} alt={name} className="team-image" />
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
      <a href={linkedin} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default TeamMemberCard;
