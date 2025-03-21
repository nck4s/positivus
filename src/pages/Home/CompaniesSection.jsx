import "./styles/CompaniesSection.css";
import amazon from "../../assets/logos/amazon.png";
import dribbble from "../../assets/logos/dribbble.png";
import hubspot from "../../assets/logos/hubspot.png";
import notion from "../../assets/logos/notion.png";
import netflix from "../../assets/logos/netflix.png";
import zoom from "../../assets/logos/zoom.png";

const companies = [
  { name: "Amazon", logo: amazon },
  { name: "Dribbble", logo: dribbble },
  { name: "HubSpot", logo: hubspot },
  { name: "Notion", logo: notion },
  { name: "Netflix", logo: netflix },
  { name: "Zoom", logo: zoom }
];

const CompaniesSection = () => {
  return (
    <section className="companies">
      <div className="container">
        {companies.map((company, index) => (
          <img key={index} src={company.logo} alt={company.name} className="company-logo" />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
