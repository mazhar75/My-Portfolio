import React, { useState, useRef, useEffect } from 'react';
import styles from './MinAssistant.module.css';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const MinAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'min', text: 'Hi! I am MIN, your AI assistant. Ask me anything about Mazharul Islam.' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/min-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg.text, history: messages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'min', text: data.answer || 'Sorry, I could not answer that.' }]);
    } catch (e) {
      setMessages(prev => [...prev, { sender: 'min', text: 'Sorry, there was an error connecting to the assistant.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setMessages([
        { sender: 'min', text: 'Hi! I am MIN, your AI assistant. Ask me anything about Mazharul Islam.' }
      ]);
    }, 300);
  };

  return (
    <>
      {!open && (
        <button className={styles.fab} onClick={() => setOpen(true)} title="Ask my AI assistant MIN">
          <FaRobot size={28} />
        </button>
      )}
      {open && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <FaRobot className={styles.robotIcon} />
            <span>MIN – Ask about Mazharul Islam</span>
            <button className={styles.closeBtn} onClick={handleClose}><FaTimes /></button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === 'user' ? styles.userMsg : styles.minMsg}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className={styles.minMsg}>MIN is typing...</div>}
            <div ref={chatEndRef} />
          </div>
          <div className={styles.chatInputRow}>
            <input
              className={styles.chatInput}
              type="text"
              placeholder="Want to know anything? Ask my AI assistant MIN"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              autoFocus
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={loading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MinAssistant; 