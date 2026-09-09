function Experience() {
  const journey = [
    {
      number: "01",
      type: "Currently Learning",
      icon: "AI",
      title: "Artificial Intelligence",
      subtitle: "AI & LLM Development",
      description:
        "Exploring AI applications, Large Language Models, APIs and building AI-powered applications using Python.",
      current: true,
    },
    {
      number: "02",
      type: "Internship",
      icon: "☕",
      title: "Java Development Intern",
      subtitle: "Elevate Labs",
      description:
        "Worked on software development projects and improved practical programming skills by building real-world applications.",
    },
    {
      number: "03",
      type: "Internship",
      icon: "</>",
      title: "Web Development Intern",
      subtitle: "Techplement",
      description:
        "Worked on web development projects and gained hands-on experience building responsive web applications using modern technologies.",
    },
    {
      number: "04",
      type: "Education",
      icon: "🎓",
      title: "Bachelor's Degree",
      subtitle: "Computer Science / IT",
      description:
        "Studied programming, databases, web development, software engineering and computer science fundamentals.",
    },
  ];

  return (
    <section
      className="experience"
      id="experience"
      data-aos="fade-up"
    >
      <div className="experience-container">

        {/* HEADING */}

        <div className="experience-heading">

          <p className="section-tag">
            MY JOURNEY
          </p>

          <h2>
            Experience & Education
          </h2>

          <p>
            A timeline of my learning journey, internships and
            continuous growth as a software developer.
          </p>

        </div>


        {/* TIMELINE */}

        <div className="timeline">

          {journey.map((item, index) => (
            <div
              className={`timeline-item ${
                item.current ? "timeline-current" : ""
              }`}
              key={item.number}
            >

              {/* TIMELINE LINE */}

              <div className="timeline-line">
                <span></span>
              </div>


              {/* NUMBER */}

              <div className="timeline-number">
                {item.number}
              </div>


              {/* CARD */}

              <div className="timeline-content">

                {/* TOP */}

                <div className="timeline-top">

                  <div className="timeline-icon">
                    {item.icon}
                  </div>

                  <div className="timeline-meta">

                    <span className="timeline-date">
                      {item.type}
                    </span>

                    {item.current && (
                      <span className="current-badge">
                        CURRENT
                      </span>
                    )}

                  </div>

                </div>


                {/* CONTENT */}

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.subtitle}
                </h4>

                <p>
                  {item.description}
                </p>


                {/* BOTTOM */}

                <div className="timeline-footer">

                  <span>
                    {index === 0
                      ? "Exploring"
                      : index === journey.length - 1
                      ? "Foundation"
                      : "Experience"}
                  </span>

                  <span className="timeline-arrow">
                    ↗
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* JOURNEY FOOTER */}

        <div className="journey-footer">

          <span className="journey-line"></span>

          <p>
            Learning never stops.
          </p>

          <span className="journey-line"></span>

        </div>

      </div>
    </section>
  );
}

export default Experience;