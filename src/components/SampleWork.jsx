import React from "react";
import "../styles/sampleWork.css"; // Import external CSS
import cp from "../assets/prudvicp.jpg";

const SampleWork = () => {
  const projects = [
    {
      image: cp,
      title: "Shortest Path Visualizer (Dijkstra's Algorithm)",
      description:
        "This project visually demonstrates Dijkstra's algorithm for finding the shortest path in a graph. Built with React for an interactive UI, it allows users to set start and end nodes and observe the algorithm's execution in real time.",
      skills: "Data Structures & Algorithms · React.js · HTML · JavaScript · CSS",
      github: "https://github.com/errabelliprudvi/ShortestPathVisualizer",
      url:"https://shortestpathfinderv.netlify.app"
    },
    {
      image: "",
      title: "Grospr (E-Commerce WebSite)",
      description:
        "This project features a React.js front end for a dynamic and interactive user experience, a Node.js and Express.js backend for efficient server-side processing, and a MySQL database for secure and reliable data storage. Key functionalities include product browsing, user authentication, shopping cart management.",
      skills: "Express.js · React.js · HTML · JavaScript · Amazon EC2 · Networking · SQL · GitHub · SOLID Design Principles · Vite · Node.js · Cascading Style Sheets (CSS) · Database Management System (DBMS) · Amazon Web Services (AWS) · MySQL",
      github: "https://github.com/errabelliprudvi/Grospr",
      url:"https://grospr.netlify.app"
    },
    {
      image: "",
      title: "Chatter Box (Chatting Application for Android)",
      description:
        "This feature-rich Android chatting application built with Kotlin, Android Studio, and Jetpack Compose for a modern and responsive UI. The backend, developed in Java, leverages WebSockets to enable secure and efficient real-time communication. The app supports user authentication, one-on-one chats, and instant message delivery .",
      skills: "Material-UI · Android Jetpack · WebSocket · Android Studio · Data Structures · GitHub · Kotlin · Java · Android Development",
      github: "https://github.com/errabelliprudvi/ChatterBox",
      url:""
    },
  ];

  return (
    <section className="sample-work-section">
      <div className="sample-work-header">
        <h2>Personal Projects</h2>
      </div>

      {/* Work Grid */}
      <div className="sample-work-grid">
        {projects.map((project, index) => (
          <div key={index} className="sample-work-item">
          
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Skills:</h4>
            <p>{project.skills}</p>
            <div className="project_code_link">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>

            <a href={project.url} target="_blank" rel="noopener noreferrer" className="github-link">
              Website
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleWork;
