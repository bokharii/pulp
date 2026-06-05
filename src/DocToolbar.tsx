import type { Doc } from "./types";

export default function DocToolbar({
  docs,
  handleUpload,
  selectedDocId,
  handleDocSelect,
}) {
  return (
    <>
      <label htmlFor="doc-upload" className="upload-btn">
        Upload doc
      </label>
      <input
        type="file"
        accept=".txt"
        hidden
        id="doc-upload"
        onChange={(e) => {
          const file = e.target.files?.[0];
          console.log(file);
          if (!file) return;
          handleUpload(file);
        }}
      ></input>
      {docs.map((doc: Doc) => (
        <button
          type="button"
          key={doc.id}
          className="doc-name"
          onClick={() => handleDocSelect(doc)}
        >
          {doc.name}
        </button>
      ))}
    </>
  );
}
