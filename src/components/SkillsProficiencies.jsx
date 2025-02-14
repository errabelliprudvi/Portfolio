import React from "react";
import "../styles/skillsProficiencies.css"; // Import external CSS

const SkillsProficiencies = () => {
  const technicalSkills = [
    "Java", "DSA", "C++", "Python", "JavaScript", "SQL"
  ];

  const languages = [
    "English (Fluent)", "Telugu (Native)", "Hindi (Intermediate)"
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Heading */}
        <div className="skills-header">
          <h2>Skills & Proficiencies</h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Technical Skills */}
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {languages.map((lang, index) => (
                <span key={index} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProficiencies;
