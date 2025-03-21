import { useState } from "react";
import "./styles/WorkingProcess.css";
import ProcessStep from "./ProcessStep";

// Данные шагов процесса
const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct extensive market research and competitor analysis to develop a strategy tailored to your business goals.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Executing the strategy through various digital marketing channels to ensure maximum effectiveness.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "Constantly tracking performance metrics and making necessary optimizations to enhance results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "Providing detailed reports and ongoing communication to keep you informed about campaign performance.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Continuously refining and adapting strategies to ensure long-term growth and success.",
  },
];

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState("01");

  return (
    <section className="working-process">
      <div className="process-header">
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            isActive={activeStep === step.number}
            setActiveStep={setActiveStep}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
