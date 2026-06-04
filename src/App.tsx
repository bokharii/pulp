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
  function handleUpload(file: File){
    const newDoc: Doc = {id: '', name: file.name, content: ""}
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
