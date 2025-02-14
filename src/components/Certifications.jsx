import React from "react";
import "../styles/certifications.css"; // Import external CSS

const Certifications = () => {
  const certifications = [
    {
      image: "/images/cert1.png", // Replace with actual image path
      title: "Python Programming",
      issuer: "Infosys Spring Board",
      year: "2022",
    },
    {
      image: "/images/cert2.png", // Replace with actual image path
      title: "Kotlin Programming",
      issuer: "Infosys Spring Board",
      year: "2023",
    },
    
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-header">
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.image} alt={cert.title} />
            <div className="certification-text">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
