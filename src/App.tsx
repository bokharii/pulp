import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import MainLayout from './MainLayout'
import DocToolbar from './DocToolbar'
import type { Doc } from './types'

function App() {
  // what state will app own?
  // what children need which pieces
  const [docs, setDocs] = useState<Doc[]>([]);
  async function handleUpload(file: File){
    const fileText = await file.text();
    const newDoc: Doc = {id: crypto.randomUUID(), name: file.name, content: fileText}
    setDocs(prev => [...prev, newDoc])
  }
  return (
    <>
    <Nav />
    <DocToolbar docs={docs} handleUpload={handleUpload}/>
    <MainLayout docs={docs}/>
    </>
  )
}

export default App
