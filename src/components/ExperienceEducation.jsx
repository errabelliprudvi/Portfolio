import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // Icons
import "../styles/experienceEducation.css"; // Import external CSS

const ExperienceEducation = () => {
  const experiences = [
    {
      year: "2025",
      role: "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE",
      company: "Lingaya's Vidyapeeth",
      location: "Faridabad",
      type: "education",
    },
    {
      year: "2025",
      role: "JAVA DEVELOPER INTERN",
      company: "CODSOFT",
      description:
        "Provides direction for applications in development. Researches and develops new ways to improve our development process. Mentors Junior Software Engineers.",
      type: "work",
    },
    {
      year: "2024",
      role: "INTERNSHALA STUDENT PARTNER",
      company: "INTERNSHALA",
      description:
        "Developed, installed, and configured internal applications, as well as new application releases into test and production environments.",
      type: "work",
    },
    {
      year: "2024",
      role: "SOFTWARE ENGINEER INTERN",
      company: "VCM TECHNOLOGIES PVT LTD",
      description:
        "Provides direction for applications in development. Researches and develops new ways to improve our development process. Mentors Junior Software Engineers.",
      type: "work",
    },
  ];

  return (
    <section className="experience-education">
      <div className="experience-container">
        <h2 className="experience-heading">Experience & Education</h2>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                {exp.type === "education" ? <FaGraduationCap /> : <FaBriefcase />}
              </div>
              <div className="timeline-content">
                <h3>{exp.year}</h3>
                <h4>{exp.role}</h4>
                <p className="company">{exp.company}</p>
                {exp.location && <p className="location">{exp.location}</p>}
                {exp.description && <p className="description">{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
