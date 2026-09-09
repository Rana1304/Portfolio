import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">

      {/* Background Decoration */}
      <div className="hero-bg-glow"></div>
      <div className="hero-grid"></div>


      {/* LEFT SIDE */}
      <div className="hero-content">

        {/* Availability */}
        <div className="availability">
          <span className="availability-dot"></span>
          Open to opportunities
        </div>


        <p className="hero-greeting">
          Hi, I'm <span>👋</span>
        </p>


        <h1>
          Jatin <span>Rana</span>
        </h1>


        <div className="hero-role">

          <span className="role-prefix">I'm a</span>

          <h2>
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "AI Developer",
                2000,
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={45}
              deletionSpeed={65}
              repeat={Infinity}
            />
          </h2>

        </div>


        <p className="hero-description">
          I build modern applications and explore AI-powered solutions
          using <strong>Java, Python, React</strong> and modern technologies.
        </p>


        {/* Tech Stack */}
        <div className="hero-tech">

          <span>Java</span>
          <span>Python</span>
          <span>React</span>
          <span>AI / LLM</span>

        </div>


        {/* Buttons */}
        <div className="hero-buttons">

          <a href="https://drive.google.com/file/d/1mjEm1A3hWSx2aaOh8EKiQLjPTjOB6d1f/view" className="btn primary-btn">
            MY Resume
            <span>↗</span>
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Talk
            <span>→</span>
          </a>

        </div>


        {/* Social Links */}
        <div className="hero-socials">

          <span>Connect with me</span>

          <div className="social-line"></div>

          <a
            href="https://github.com/Rana1304"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-ranaji/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-image">

        {/* Decorative rings */}
        <div className="photo-ring ring-one"></div>
        <div className="photo-ring ring-two"></div>

        {/* Glow */}
        <div className="photo-glow"></div>
        <div className="photo-glow glow-two"></div>


        {/* Floating Cards */}

        <div className="floating-card card-top">
          <span>☕</span>
          <div>
            <strong>Java</strong>
            <small>Development</small>
          </div>
        </div>


        <div className="floating-card card-bottom">
          <span>🤖</span>
          <div>
            <strong>AI / LLM</strong>
            <small>Exploring</small>
          </div>
        </div>


        {/* Profile */}
        <div className="photo-container">

          <div className="photo-inner-glow"></div>

          <img
            src="./profile.png"
            alt="Jatin Rana"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;