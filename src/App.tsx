import { useEffect, useState } from 'react'
import './App.css'
import { Diary,NewDiary } from './types'
import { getAllDiaries,createDiaries } from './services/diaryService'
import DiaryList from './components/DiaryList'
import EntryForm from './components/EntryForm'
const App=()=>{
  //const [date, setDate] = useState('');
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(()=>{
     getAllDiaries().then(data=>setDiaries(data)
     )
},[])

 const addDiaries=(newDiary:NewDiary)=>{
    createDiaries(newDiary).then(data=>setDiaries(diaries.concat(data)))
 }

  return  (
    <div>
      <h2>Diary Entry</h2>
      <EntryForm addDiaries={addDiaries}/>
      <h2><i>Entries</i></h2>
      { diaries.map(diary=><DiaryList key={diary.id} diary={diary}/>)
      } 
    </div>
  )
}

export default App


