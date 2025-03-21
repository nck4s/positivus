import "./styles/Team.css";
import TeamMemberCard from "./TeamMemberCard";
import johnSmith from "../../assets/images/john-smith.png";
import janeDoe from "../../assets/images/jane-doe.png";
import michaelBrown from "../../assets/images/michael-brown.png";
import emilyJohnson from "../../assets/images/emily-johnson.png";
import brianWilliams from "../../assets/images/brian-williams.png";
import sarahKim from "../../assets/images/sarah-kim.png";

// Данные сотрудников
const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: johnSmith,
    linkedin: "#",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: janeDoe,
    linkedin: "#",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: michaelBrown,
    linkedin: "#",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: emilyJohnson,
    linkedin: "#",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: brianWilliams,
    linkedin: "#",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: sarahKim,
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team-header">
        <h2>Team</h2>
        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>

      <button className="see-all-btn">See all team</button>
    </section>
  );
};

export default Team;
