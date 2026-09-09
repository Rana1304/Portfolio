import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hey! 👋 I'm Jatin's AI Assistant. How can I help you?",
    },
  ]);

  const sendMessage = async () => {
  if (!message.trim()) return;

  const userMessage = message.trim();

  setMessages((prev) => [
    ...prev,
    {
      type: "user",
      text: userMessage,
    },
  ]);

  setMessage("");

  try {
    const history = messages.map((msg) => ({
      role: msg.type === "user" ? "user" : "bot",
      text: msg.text,
    }));

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        history,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: data.reply,
      },
    ]);

  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Sorry, I'm having trouble connecting to my AI brain right now 🤖",
      },
    ]);
  }
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        className={`ai-button ${isOpen ? "hide-button" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <span className="ai-icon">✦</span>
      </button>

      {/* Chat Window */}
      <div className={`ai-chat ${isOpen ? "show" : ""}`}>

        {/* Header */}
        <div className="ai-header">
          <div className="ai-profile">
            <div className="ai-avatar">✦</div>

            <div>
              <h3>AI Assistant</h3>
              <span>
                <i></i> Online
              </span>
            </div>
          </div>

          <button
            className="ai-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI Assistant"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.type === "user" ? "user-message" : "bot-message"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="quick-actions">
          <button onClick={() => setMessage("Tell me about Jatin")}>
            About Jatin
          </button>

          <button onClick={() => setMessage("What are his skills?")}>
            Skills
          </button>

          <button onClick={() => setMessage("Show me his projects")}>
            Projects
          </button>
        </div>

        {/* Input */}
        <div className="ai-input-area">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            className="send-button"
            onClick={sendMessage}
            aria-label="Send message"
          >
            ➤
          </button>
        </div>

      </div>
    </>
  );
}

export default AIAssistant;