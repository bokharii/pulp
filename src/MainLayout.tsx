import ChatPanel from "./ChatPanel";
import DocViewer from "./DocViewer";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.main}>
      {/* component for uploaded document */}
      <div className={styles.docViewer}>
        <DocViewer />
      </div>
      <div className={styles.chatPanel}>
        <ChatPanel />
      </div>
    </div>
  );
}
