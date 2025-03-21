import "./styles/ProcessStep.css";

const ProcessStep = ({ number, title, description, isActive, setActiveStep }) => {
  return (
    <div className={`process-step ${isActive ? "active" : ""}`} onClick={() => setActiveStep(isActive ? null : number)}>
      <div className="step-header">
        <span className="step-number">{number}</span>
        <h3>{title}</h3>
        <button className="toggle-btn">{isActive ? "−" : "+"}</button>
      </div>
      {isActive && <p className="step-description">{description}</p>}
    </div>
  );
};

export default ProcessStep;
