import { useState } from "react";
//import toNewDiary from "../utils/parseEntry";
import { EntriesProps } from "../types";
import { Visibility,Weather } from "../types";


const EntryForm=({addDiaries}:EntriesProps)=>{
  const [date,setDate]=useState('');
  const [visibility,setVisibility]=useState('');
  const [weather, setWeather]=useState('');
  const [comment, setComment]=useState('');

  const submitDiary=(event:React.SyntheticEvent)=>{
    event.preventDefault()
    
      //const newDiary=toNewDiary({date,visibility,weather,comment});
      addDiaries({date,visibility,weather,comment});
      setDate('');
      setComment('');
      setVisibility('');
      setWeather('');
  } 
    
   
  
 return(
  <form onSubmit={submitDiary}>

    date: <input type='date' value={date} onChange={(event) => setDate(event.target.value)} /><br/>
    <div  className="visibility">
      <label> Visibility: </label>
      {
        Object
        .values(Visibility)
        .map(item=>{
        return(
          < div key={item}>
            <label >{item}</label>
            <input type="radio" id={item} name="visibility" value={item } onChange={(e)=>setVisibility(e.target.value)} />
          </div>
        )})
      }
    </div>
    <div className="weather">
      <label>weather:</label>
      {
        Object
        .values(Weather)
        .map((item)=>{
        return(
          <div key={item}>
            <label>{item}</label>
            <input type="radio" id={item} name="weather" value={ item } onChange={(e)=>setWeather(e.target.value)} />
          </div>
        )})
      }
    </div>
    comment: <input type="text" value={comment} onChange={(event)=>setComment(event.target.value)}/><br/>
    <button type='submit'>add</button>
    
  </form>
 )
}

export default EntryForm;