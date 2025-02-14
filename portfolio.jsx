import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";



const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/your-image.jpg" // Replace with actual image path
          alt="Person thinking"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Prudvi Errabelli
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          Software Engineer
        </p>
        <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-900 transition">
          Reach out
        </button>
      </div>
    </section>
  );
};






const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-300 px-6 md:px-16">
      {/* Left - Text */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          I am a final-year Computer Science student with hands-on experience in Java, Python, C++, and full-stack
          development. I have a strong focus on building scalable applications using React.js, Node.js, MySQL, and
          developing Android apps with Kotlin. I also have experience with real-time systems using WebSockets and
          process management for Linux. I am dedicated to creating efficient, clean, and maintainable code.
        </p>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/your-image.jpg" // Replace with actual image path
          alt="Person working on laptop"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};





const ExperienceEducation = () => {
  const experiences = [
    {
      year: "2024",
      role: "SOFTWARE ENGINEER INTERN",
      company: "HEIMAN SOFTWARE LABS",
      description:
        "Provides direction for applications in development. Researches and develops new ways to improve our development process. Mentors Junior Software Engineers.",
    },
    {
      year: "2027",
      role: "JUNIOR SOFTWARE ENGINEER",
      company: "HEIMAN SOFTWARE LABS",
      description:
        "Developed, installed, and configured internal applications, as well as new application releases into test and production environments.",
    },
    {
      year: "2025",
      role: "BACHELOR’S IN COMPUTER SCIENCE",
      company: "De Loureigh University",
      location: "Venston Bay",
      scholarship: "Heiman Software Labs Scholar",
    },
  ];

  return (
    <section className="bg-white min-h-screen flex justify-center items-center px-6 md:px-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        {/* Left Side - Heading */}
        <div className="flex items-start">
          <h2 className="text-4xl font-bold text-gray-900">Experience & Education</h2>
        </div>

        {/* Right Side - Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{exp.year}</h3>
              <h4 className="text-lg font-semibold text-gray-800">{exp.role}</h4>
              <p className="text-gray-700">{exp.company}</p>
              {exp.location && <p className="text-gray-700">{exp.location}</p>}
              {exp.scholarship && <p className="text-gray-700">{exp.scholarship}</p>}
              {exp.description && <p className="text-gray-700 mt-2">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





const SkillsProficiencies = () => {
  const technicalSkills = [
    { name: "Java, HTML, CSS, jQuery, PHP, SQL", proficiency: "90%" },
    { name: "Software and Web development", proficiency: "85%" },
  ];

  const languages = [
    { name: "American English (Native)", proficiency: "95%" },
    { name: "French (B2 Certificate)", proficiency: "80%" },
  ];

  return (
    <section className="bg-white min-h-screen flex justify-center items-center px-6 md:px-20">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-gray-600 uppercase text-sm">YOUR PRE-TITLE GOES HERE</p>
          <h2 className="text-4xl font-bold text-gray-900">Skills & Proficiencies</h2>
        </div>

        {/* Skills Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">TECHNICAL SKILLS</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-700">{skill.name}</p>
                <div className="w-full bg-gray-300 h-2 mt-1 rounded-md">
                  <div
                    className="bg-black h-2 rounded-md"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">LANGUAGES</h3>
            {languages.map((lang, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-700">{lang.name}</p>
                <div className="w-full bg-gray-300 h-2 mt-1 rounded-md">
                  <div
                    className="bg-black h-2 rounded-md"
                    style={{ width: lang.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const SampleWork = () => {
  const projects = [
    {
      image: "/images/project1.png", // Replace with actual image path
      title: "Heiman Software's Internal Apps",
      description:
        "I led my team in developing applications that would improve the company’s processes.",
    },
    {
      image: "/images/project2.png", // Replace with actual image path
      title: "Berou Inc.'s HR System",
      description:
        "As an intern, I helped create a cloud-based human resources information system that streamlined employee information.",
    },
    {
      image: "/images/project3.png", // Replace with actual image path
      title: "Junior Software Engineers Program",
      description:
        "I established a training program for newly hired Junior Software Engineers.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Sample Work</h2>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

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
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg shadow-lg p-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="/images/contact-image.png" // Replace with actual image path
          alt="Contact"
          className="w-full max-w-md rounded-lg"
        />
      </div>

      {/* Right: Contact Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Reach out</h2>
        <p className="text-lg font-semibold">Sari Purdue</p>
        <p className="text-gray-400 mb-6">hello@reallygreatsite.com</p>

        {/* Social Media Icons */}
        <p className="text-gray-400 uppercase text-sm mb-2">Connect with me</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};


const PortfolioHome = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <ExperienceEducation />
      <SkillsProficiencies />
      <SampleWork />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default PortfolioHome;
