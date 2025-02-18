import React from "react";
import "../styles/certifications.css"; // Import external CSS
import py  from"../assets/python.png"
import kt  from"../assets/kotlin.png"

const Certifications = () => {
  const certifications = [
    {
      url:"https://drive.google.com/file/d/1M9BRXTJRLZNQJKtMCWek9EJ6pyXjFBpF/view?usp=drive_link",
      image: py, // Replace with actual image path
      title: "Python Fundamentals",
      issuer: "Infosys Spring Board",
      year: "2022",
    },
    {
      url:"https://drive.google.com/file/d/1MAKnmGsSunfnl_RWFEXaOuqpeWJp-D8C/view?usp=drive_link",
      image: kt, // Replace with actual image path
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
            <a href={cert.url}>
            <img src={cert.image} alt={cert.title} />
            </a>
            
            
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
