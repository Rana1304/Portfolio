function Projects() {
  const projects = [
    {
      title: "Quick Kart",
      description:
        "A full-stack grocery shopping application with authentication, product management, cart, checkout and admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      type: "Full Stack",
      number: "01",
      github: "https://github.com/Rana1304/NextQuickCart",
      demo: "#",
    },
    {
      title: "AI Document Assistant",
      description:
        "An AI-powered application that allows users to interact with documents and get intelligent responses using LLMs.",
      tech: ["Python", "AI", "LLM", "Gradio"],
      type: "AI Application",
      number: "02",
      github: "https://github.com/Rana1304/AI_PYTHON/blob/main/AI_Study_Buddy.ipynb",
      demo: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "A Java-based application for tracking and managing personal expenses in an organized way.",
      tech: ["Java", "OOP", "File Handling"],
      type: "Java Application",
      number: "03",
      github: "https://github.com/Rana1304/Expense_Tracker_JAVA",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="fade-up">

      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-tag">MY PROJECTS</p>

          <h2>Things I've Built</h2>

          <p>
            A selection of projects I've built while exploring software
            development, full-stack applications and AI.
          </p>
        </div>


        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              {/* Preview */}
              <div className="project-image">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

                <div className="project-preview-content">
                  <div className="preview-window">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="preview-glow"></div>

              </div>


              {/* Content */}
              <div className="project-content">

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <span className="project-arrow">↗</span>
                </div>

                <p>
                  {project.description}
                </p>


                <div className="project-tech">

                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>


                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;