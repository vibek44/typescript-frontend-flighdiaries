import { useEffect, useState } from 'react'
import './App.css'
import { Diary } from './types'
import { getAllDiaries } from './services/diaryService'
import DiaryList from './components/DiaryList'
import EntryForm from './components/EntryForm'
const App=()=>{
  //const [date, setDate] = useState('');
  const [diaries, setDiaries] = useState<Diary>([]);

  useEffect(()=>{
     getAllDiaries().then(data=>setDiaries(data)
     )
},[])
  return  (
    <div>
      <h2>Diary Entry</h2>
      <EntryForm/>
      <ul>
      { diaries.map(diary=><DiaryList key={diary.id} diary={diary}/>)
      }</ul>
      
    </div>
  )
}

export default App


