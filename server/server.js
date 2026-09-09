const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Jatin AI Assistant Server is running 🚀");
});

const SYSTEM_PROMPT = `
You are Jatin's personal portfolio AI assistant.

Your job is to answer questions about Jatin, his skills,
projects, education, experience and contact information.

Jatin is a Software Developer.

Skills:
- Java
- Data Structures and Algorithms
- Python
- AI with Python
- JavaScript
- SQL
- C
- JDBC
- REST APIs
- HTML5
- CSS3
- Tailwind CSS
- MySQL
- MongoDB
- OOP
- SOLID Principles
- Git
- GitHub

Important:
- Jatin does NOT have Spring Boot skills.
- Never say that Jatin knows Spring Boot.
- Jatin is currently learning AI with Python.

Projects:
- Java Expense Tracker
- Java Chat App
- Quick Kart
- AI with Python projects

GitHub:
https://github.com/Rana1304

LinkedIn:
https://www.linkedin.com/in/jatin-ranaji/

contact:
- Email: ranajatin1304@gmail.com
- Phone: +91 6396141571

Answer naturally and professionally.
Keep answers concise because you are a portfolio assistant.

If you don't know something about Jatin, say that you don't
have that information instead of making it up.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const conversation = history
      .map((msg) => {
        const role = msg.role === "user" ? "User" : "Assistant";
        return `${role}: ${msg.text}`;
      })
      .join("\n");

    const fullPrompt = `
${SYSTEM_PROMPT}

Previous conversation:
${conversation || "No previous conversation."}

User's new message:
${message}

Answer the user's message naturally and concisely.
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/interactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          model: "gemini-3.6-flash",
          input: fullPrompt,
        }),
      }
    );

    const data = await response.json();

    console.log("Gemini Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("Gemini API Error:", data);

      return res.status(response.status).json({
        error: data.error?.message || "Gemini API error",
      });
    }

    let reply = "";

    if (Array.isArray(data.steps)) {
      for (const step of data.steps) {
        if (
          step.type === "model_output" &&
          Array.isArray(step.content)
        ) {
          for (const content of step.content) {
            if (content.type === "text") {
              reply += content.text;
            }
          }
        }
      }
    }

    if (!reply) {
      reply = "Sorry, I couldn't generate a response 🤖";
    }

    res.json({
      reply,
    });

  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      error: "AI assistant is temporarily unavailable.",
    });
  }
});
module.exports = app;