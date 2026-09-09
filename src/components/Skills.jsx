function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "C"],
    },
    {
      title: "Core CS",
      skills: ["DSA", "OOP", "SOLID Principles"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["JDBC", "REST APIs"],
    },
    {
      title: "AI & Python",
      skills: ["AI with Python", "Generative AI", "LLM APIs", "Gradio"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel"],
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
            Languages, technologies and tools I use to build and explore
            software.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <div
              className="skill-group"
              key={group.title}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;