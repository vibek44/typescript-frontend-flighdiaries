import { useEffect, useState } from 'react'
import './App.css'
import { Diary } from './types'
import axios from 'axios'
const App=()=>{
 
  //const [date, setDate] = useState('');
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(()=>{
    axios.get<Diary[]>('http://localhost:3001/api/diaries').then(res=>setDiaries(res.data))

  },[])
 /* const diaryCreate=(event:React.SyntheticEvent)=>{
   
  }*/

  return  (
    <div>
      <ul>
      { diaries.map(diary=>
          <li key={diary.id}>{diary.weather}</li>
        )
      }
      </ul>
    </div>
  )
}

export default App
