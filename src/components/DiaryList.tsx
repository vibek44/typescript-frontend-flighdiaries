import { Diary } from "../types"
const DiaryList=({diary}:{diary:Diary})=>{
 return(<li>
   <b>{diary.date}</b>
   <p>weather : {diary.weather}</p>
   <p>visibility : {diary.visibility}</p>
 </li>)
}

export default DiaryList
