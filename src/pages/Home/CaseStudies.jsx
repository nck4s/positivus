import "./styles/CaseStudies.css";
import CaseStudyCard from "./CaseStudyCard";

// Данные о кейсах
const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="case-header">
        <h2>Case Studies</h2>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

      <div className="case-container">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} text={study.text} isLast={index === caseStudies.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;