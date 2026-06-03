import type { Message } from "./types";
import type { SubmitEvent } from "react";
import styles from "./ChatPanel.module.css";
import { useState } from "react";

const fakeMessages: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "user",
    content: "hey friend",
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "how can i help you",
  },
  {
    id: crypto.randomUUID(),
    role: "user",
    content: "u cant ok bye",
  },
];
export default function ChatPanel() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState<Message[]>(fakeMessages);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!text.trim()) return;
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "cool story bro",
    };
    setMessage((prev) => [...prev, newMessage, assistantMessage]);
    setText("");
  }

  return (
    <div className={styles.chatPanel}>
      {message.map((msg) => {
        return (
          <div key={msg.id} className={`${styles.message} ${styles[msg.role]}`}>
            <p>{msg.content}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="chat-input"
          placeholder="Send message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
