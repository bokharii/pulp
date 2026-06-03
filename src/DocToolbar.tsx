import { useState } from "react";
import type { Doc } from "./types";

export default function DocToolbar() {
  const [docs, setDocs] = useState<Doc[]>([]);
  return (
    <>
      <p>Count: {docs.length}</p>
      <label htmlFor="doc-upload" className="upload-btn">
        Upload doc
      </label>
      <input
        type="file"
        accept=".pdf"
        hidden
        id="doc-upload"
        onChange={(e) => {
          const file = e.target.files?.[0];
          console.log(file);
          if (!file) return;
          const newDoc: Doc = {
            id: crypto.randomUUID(),
            name: file.name,
            content: "placeholder",
          };
          setDocs((prev) => [...prev, newDoc]);
        }}
      ></input>
      {docs.map((doc) => (
        <span key={doc.id} className="doc-name">{doc.name}</span>
      ))}
    </>
  );
}
