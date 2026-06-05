import type { Doc } from "./types";
export default function DocViewer({ docs, selectedDocId }) {
  const selectedDoc = docs.find((d: Doc) => d.id === selectedDocId);
  return docs.length ? (
    <pre>{selectedDoc.content}</pre>
  ) : (
    <h1>No Document Available</h1>
  );
}
