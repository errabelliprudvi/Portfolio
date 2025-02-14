import React from "react";
import "../styles/testimonials.css"; // Import external CSS

const Testimonials = () => {
  const testimonials = [
    {
      image: "/images/person1.png", // Replace with actual image path
      quote:
        "I am glad to have worked with them over the years. They are intelligent and kind, and they can balance multiple responsibilities at once. Any organization would be lucky to have them.",
      name: "Trinh Hien",
      position: "Department Head",
    },
    {
      image: "/images/person2.png", // Replace with actual image path
      quote:
        "I am glad to have worked with them. They are intelligent and kind, and they can balance multiple responsibilities at once. Any organization would be lucky to have them.",
      name: "Samira Hadid",
      position: "Supervisor",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Certifications</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-text">
              <p>"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
