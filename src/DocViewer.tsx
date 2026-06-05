export default function DocViewer({ docs }) {
  return docs.length ? <h1>{docs[0].content}</h1> : <h1>No Document Available</h1>;
}
