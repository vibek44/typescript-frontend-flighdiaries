import { useEffect, useState } from 'react';
import './App.css';
import { Diary,NewDiary } from './types';
import { getAllDiaries,createDiaries } from './services/diaryService';
import DiaryList from './components/DiaryList';
import EntryForm from './components/EntryForm';

const App=()=>{
  const [error, setError] = useState('');
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(()=>{
     getAllDiaries().then(data=>setDiaries(data)
     )
  },[])

  const addDiaries=async(newDiary:NewDiary)=>{
   
      const data=await createDiaries(newDiary)
      if(data &&  typeof data==='object' && 'id' in data && 'date' in data && 'comment' in data && 'visibility' in data){
        setDiaries(diaries.concat(data))
      }
   
      if( data && typeof data === 'object' && 'message' in data  ){
        setError(data.message)
        setTimeout(()=>{
          setError('');
        },3000) 
    }
  
}  
  return  (
    <div>
      {error && <p className='error'>{error}</p>}
      <h2>Diary Entry</h2>
      <EntryForm addDiaries={addDiaries}/>
      <h2><i>Entries</i></h2>
      { diaries.map(diary=><DiaryList key={diary.id} diary={diary}/>)
      } 
    </div>
  )
}

export default App


