import ChatPanel from "./ChatPanel";
import DocViewer from "./DocViewer";
import styles from "./MainLayout.module.css";

export default function MainLayout({ docs }) {
  return (
    <div className={styles.main}>
      {/* component for uploaded document */}
      <div className={styles.docViewer}>
        <DocViewer docs={docs}/>
      </div>
      <div className={styles.chatPanel}>
        <ChatPanel />
      </div>
    </div>
  );
}
