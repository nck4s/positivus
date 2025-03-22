import "./styles/TeamMemberCard.css";
import linkedinIcon from "../../assets/images/linkedin.png"; // Импорт иконки

const TeamMemberCard = ({ name, role, description, image, linkedin }) => {
  return (
    <div className="team-card">
      
      {/* Объединённый блок изображения, имени и роли */}
      <div className="member-header">
        <div className="image-wrapper">
          <img src={image} alt={name} className="team-image" />
        </div>
        <div className="member-name-role">
          <h3>{name}</h3>
          <p className="role">{role}</p>
        </div>
        {/* Иконка LinkedIn */}
      <a href={linkedin} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      </div>

      {/* Описание */}
      <div className="description-wrapper">
        <p className="description">{description}</p>
      </div>

      
    </div>
  );
};

export default TeamMemberCard;
