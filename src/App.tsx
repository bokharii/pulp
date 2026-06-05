import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import MainLayout from "./MainLayout";
import DocToolbar from "./DocToolbar";
import type { Doc } from "./types";

function App() {
  // what state will app own?
  // what children need which pieces
  const [docs, setDocs] = useState<Doc[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  function handleDocSelect(doc: Doc) {
    setSelectedDocId(doc.id);
  }
  async function handleUpload(file: File) {
    const fileText = await file.text();
    const newDoc: Doc = {
      id: crypto.randomUUID(),
      name: file.name,
      content: fileText,
    };
    setDocs((prev) => [...prev, newDoc]);
    setSelectedDocId(newDoc.id)
  }
  return (
    <>
      <Nav />
      <DocToolbar docs={docs} handleUpload={handleUpload} selectedDocId={selectedDocId} handleDocSelect={handleDocSelect}/>
      <MainLayout docs={docs} selectedDocId={selectedDocId}/>
    </>
  );
}

export default App;
