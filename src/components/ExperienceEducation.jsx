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
      "Gained knowledge of advanced Java concepts like reflection, annotations, and serialization, applying them to optimize application design and functionality.",
        type: "work",
    },
    
      {
        "year": "2024",
        "role": "Internshala Student Partner",
        "company": "Internshala",
        "description": "Promoted Internshala's training programs, guided students in career opportunities, and organized workshops to increase awareness about online internships.",
        "type": "work"
      },
      
    {
      year: "2024",
      role: "SOFTWARE ENGINEER INTERN",
      company: "VCM TECHNOLOGIES PVT LTD",
      description:
        "Contributed to the development of Java-based applications, focused on backend functionality and API development. Participated in code re-views, unit testing, and debugging to maintain high-quality code standards.",
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
