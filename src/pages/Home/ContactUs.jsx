import { useState } from "react";
import "./styles/ContactUs.css";
import contactDecor from "../../assets/images/contact-decor.png"; // Импорт изображения

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedOption });
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-us">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Выбор Say Hi / Get a Quote */}
          <div className="contact-options">
            <label>
              <input
                type="radio"
                name="contactType"
                value="Say Hi"
                checked={selectedOption === "Say Hi"}
                onChange={() => setSelectedOption("Say Hi")}
              />
              Say Hi
            </label>
            <label>
              <input
                type="radio"
                name="contactType"
                value="Get a Quote"
                checked={selectedOption === "Get a Quote"}
                onChange={() => setSelectedOption("Get a Quote")}
              />
              Get a Quote
            </label>
          </div>

          {/* Поля формы */}
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />

          <label>Email*</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />

          <label>Message*</label>
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} required />

          {/* Кнопка отправки */}
          <button type="submit">Send Message</button>
        </form>

        {/* Декоративные элементы */}
        <div className="contact-decor">
          <img src={contactDecor} alt="Decorative element" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
