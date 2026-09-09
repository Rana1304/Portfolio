
function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <p className="section-tag">ABOUT ME</p>
          <h2>Who I Am</h2>
          <p className="about-intro">
            Developer focused on building practical software and
            exploring the possibilities of AI.
          </p>
        </div>

        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">

            <p>
              I'm <strong>Jatin Rana</strong>, a Java Developer and AI
              enthusiast who enjoys turning ideas into practical and
              modern applications.
            </p>

            <p>
              I work with <strong>Java, Python, React and JavaScript</strong>
              and I'm currently exploring Artificial Intelligence,
              Large Language Models and AI powered applications.
            </p>

            <p>
              I believe in learning by building. My goal is to continuously
              improve my development skills and create useful products
              that solve real world problems.
            </p>

            <div className="about-stats">

              <div className="stat">
                <h3>10+</h3>
                <p>Projects Built</p>
              </div>

              <div className="stat">
                <h3>5+</h3>
                <p>Core Technologies</p>
              </div>

              <div className="stat">
                <h3>170+</h3>
                <p>LeetCode Problems Solved</p>
              </div>

            </div>

          </div>


          {/* Right Side */}
          <div className="about-cards">

            <div className="about-card">
              <div className="about-card-icon">☕</div>

              <div>
                <h3>Java Development</h3>
                <p>
                  Backend systems, applications and problem solving
                  using Java.
                </p>
              </div>
            </div>


            <div className="about-card">
              <div className="about-card-icon">🤖</div>

              <div>
                <h3>Artificial Intelligence</h3>
                <p>
                  Exploring LLMs, APIs and AI-powered applications
                  with Python.
                </p>
              </div>
            </div>


            <div className="about-card">
              <div className="about-card-icon">⚛️</div>

              <div>
                <h3>Frontend Development</h3>
                <p>
                  Building clean and responsive interfaces using
                  React and modern web technologies.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

