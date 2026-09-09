function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-tag">GET IN TOUCH</p>

          <h2>Let's Work Together</h2>

          <p>
            Have a project, opportunity or just want to connect? Feel free to
            reach out.
          </p>
        </div>

        <div className="contact-content">
          {/* CONTACT INFO */}

          <div className="contact-info">
            <a
              className="contact-item"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ranajatin1304@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>✉</span>

              <div>
                <h3>Email</h3>
                <p>ranajatin1304@gmail.com</p>
              </div>

              <b>↗</b>
            </a>

            <a
              className="contact-item"
              href="https://github.com/Rana1304"
              target="_blank"
              rel="noreferrer"
            >
              <span>◉</span>

              <div>
                <h3>GitHub</h3>
                <p>github.com/Rana1304</p>
              </div>

              <b>↗</b>
            </a>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/jatin-ranaji/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/jatin-ranaji</p>
              </div>

              <b>↗</b>
            </a>

            <a
              className="contact-item"
              href="https://leetcode.com/u/JatinRana01/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LC</span>

              <div>
                <h3>LeetCode</h3>
                <p>leetcode.com/u/JatinRana01</p>
              </div>

              <b>↗</b>
            </a>
          </div>

          {/* FORM */}

          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>

              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
