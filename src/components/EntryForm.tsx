import { useState } from "react";

const EntryForm=()=>{
  const [date,setDate]=useState('');
  const [visibility,setVisibility]=useState('');
  const [weather, setWeather]=useState('');
  const [comment, setComment]=useState('');

  const submitDiary=(event:React.SyntheticEvent)=>{
    event.preventDefault()

  }
 return(
  <form onSubmit={submitDiary}>
    date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)} />
    visibility:<input type="text" value={visibility} onChange={(event)=>setVisibility(event.target.value)}/>
    weather: <input type="text" value={weather} onChange={(event)=>setWeather(event.target.value)}/>
    comment: <input type="text" value={comment} onChange={(event)=>setComment(event.target.value)}/>
  
    <button type='submit'>add</button>
  </form>
 )
}

export default EntryForm;