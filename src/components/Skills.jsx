function Skills() {
  const skills = [
    {
      name: "Java",
      category: "Languages",
      level: "Advanced",
      icon: "☕",
    },
    {
      name: "Python",
      category: "Languages",
      level: "Intermediate",
      icon: "🐍",
    },
    {
      name: "JavaScript",
      category: "Languages",
      level: "Intermediate",
      icon: "JS",
    },
    {
      name: "SQL",
      category: "Languages",
      level: "Intermediate",
      icon: "SQL",
    },
    {
      name: "C",
      category: "Languages",
      level: "Intermediate",
      icon: "C",
    },

    {
      name: "DSA",
      category: "Core CS",
      level: "Advanced",
      icon: "⌘",
    },
    {
      name: "OOP",
      category: "Core CS",
      level: "Advanced",
      icon: "OOP",
    },
    {
      name: "SOLID Principles",
      category: "Core CS",
      level: "Intermediate",
      icon: "S",
    },

    {
      name: "React.js",
      category: "Frontend",
      level: "Intermediate",
      icon: "⚛",
    },
    {
      name: "HTML5",
      category: "Frontend",
      level: "Advanced",
      icon: "</>",
    },
    {
      name: "CSS3",
      category: "Frontend",
      level: "Advanced",
      icon: "#",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Intermediate",
      icon: "TW",
    },

    {
      name: "JDBC",
      category: "Backend & APIs",
      level: "Intermediate",
      icon: "DB",
    },
    {
      name: "REST APIs",
      category: "Backend & APIs",
      level: "Intermediate",
      icon: "API",
    },

    {
      name: "MySQL",
      category: "Databases",
      level: "Intermediate",
      icon: "SQL",
    },
    {
      name: "MongoDB",
      category: "Databases",
      level: "Intermediate",
      icon: "DB",
    },

    {
      name: "AI with Python",
      category: "AI & Machine Learning",
      level: "Learning",
      icon: "AI",
    },
    {
      name: "LLM APIs",
      category: "AI & Machine Learning",
      level: "Learning",
      icon: "✦",
    },
    {
      name: "Generative AI",
      category: "AI & Machine Learning",
      level: "Learning",
      icon: "✧",
    },
    {
      name: "Gradio",
      category: "AI & Machine Learning",
      level: "Learning",
      icon: "G",
    },

    {
      name: "Git",
      category: "Tools",
      level: "Intermediate",
      icon: "⌘",
    },
    {
      name: "GitHub",
      category: "Tools",
      level: "Intermediate",
      icon: "GH",
    },
    {
      name: "VS Code",
      category: "Tools",
      level: "Advanced",
      icon: "VS",
    },
    {
      name: "IntelliJ IDEA",
      category: "Tools",
      level: "Intermediate",
      icon: "IJ",
    },
    {
      name: "Eclipse",
      category: "Tools",
      level: "Intermediate",
      icon: "E",
    },
    {
      name: "Vercel",
      category: "Tools & Deployment",
      level: "Learning",
      icon: "▲",
    },
  ];

  return (
    <section
      className="skills"
      id="skills"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-tag">MY SKILLS</p>

          <h2>Technologies I Work With</h2>

          <p>
            A collection of languages, frameworks, libraries, databases,
            AI technologies and tools I use to build and explore software.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--delay": `${index * 0.05}s` }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">

                <div className="skill-top">
                  <h3>{skill.name}</h3>

                  <span
                    className={`skill-level ${skill.level
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p>{skill.category}</p>

              </div>

              <div className="skill-arrow">↗</div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;