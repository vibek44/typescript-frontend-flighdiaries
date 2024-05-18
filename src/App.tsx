import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Notes } from './types'
function App() {
 
  const [newNote, setNewNote] = useState('tow');
  const [notes, setNotes] = useState<Notes[]>([]);

  return  (
    <>
    {newNote}
    </>
  )
  
}

export default App
