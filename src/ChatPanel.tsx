import type { Message } from "./types";
import styles from "./ChatPanel.module.css"

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
  return (
    <div className={styles.chatPanel}>
      {fakeMessages.map((msg) => {
        return (
          <div key={msg.id} className={`${styles.message} ${styles[msg.role]}`}>
            <p>{msg.content}</p>
          </div>
        );
      })}
    </div>
  );
}
