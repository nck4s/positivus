import "./styles/CaseStudyCard.css";

const CaseStudyCard = ({ text, isLast }) => {
  return (
    <div className="case-card">
      <p>{text}</p>
      <button className="learn-more">
        Learn more <span className="arrow">→</span>
      </button>
      {!isLast && <div className="divider"></div>}
    </div>
  );
};

export default CaseStudyCard;
