import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import MainLayout from './MainLayout'
import DocToolbar from './DocToolbar'

function App() {
  // what state will app own?
  // what children need which pieces

  return (
    <>
    <Nav />
    <DocToolbar />
    <MainLayout />
    </>
  )
}

export default App
