function Skills() {
  const skills = [
    {
      name: "Java",
      category: "Programming",
      level: "Advanced",
      icon: "☕",
    },
    {
      name: "Python",
      category: "Programming",
      level: "Intermediate",
      icon: "🐍",
    },
    {
      name: "JavaScript",
      category: "Programming",
      level: "Intermediate",
      icon: "JS",
    },
    {
      name: "React.js",
      category: "Frontend",
      level: "Intermediate",
      icon: "⚛",
    },
    {
      name: "HTML & CSS",
      category: "Frontend",
      level: "Advanced",
      icon: "</>",
    },
    {
      name: "MongoDB",
      category: "Database",
      level: "Intermediate",
      icon: "DB",
    },
    {
      name: "SQL",
      category: "Database",
      level: "Intermediate",
      icon: "SQL",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Intermediate",
      icon: "⌘",
    },
    {
      name: "AI / LLMs",
      category: "Artificial Intelligence",
      level: "Learning",
      icon: "AI",
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
            Technologies, frameworks and tools I use to build applications
            and continuously explore new areas of software development.
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

                  <span className={`skill-level ${skill.level.toLowerCase()}`}>
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