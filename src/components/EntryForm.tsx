import { useState } from "react";
import { createDiaries } from "../services/diaryService";

const EntryForm=()=>{
  const [date,setDate]=useState('');
  const [visibility,setVisibility]=useState('');
  const [weather, setWeather]=useState('');
  const [comment, setComment]=useState('');

  const submitDiary=(event:React.SyntheticEvent)=>{
    event.preventDefault()
    createDiaries( {date,visibility,weather,comment});
    

  }
 return(
  <form onSubmit={submitDiary}>

    date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)} /><br/>
    visibility:<input type="text" value={visibility} onChange={(event)=>setVisibility(event.target.value)}/><br/>
    weather: <input type="text" value={weather} onChange={(event)=>setWeather(event.target.value)}/><br/>
    comment: <input type="text" value={comment} onChange={(event)=>setComment(event.target.value)}/><br/>
    <button type='submit'>add</button>
    
  </form>
 )
}

export default EntryForm;