import axios from "axios";
import { Diary } from "../types";
const baseUrl='http://localhost:3001/api/diaries'
import { NewDiary } from "../types";



export const getAllDiaries=async()=>{
  const response= await axios.get<Diary[]>(baseUrl) 
  return  response.data
}

export const createDiaries=async(diaryObject:NewDiary)=>{
  try {
    const res=await  axios.post<Diary>(baseUrl,diaryObject)
    return res.data;
     
  } catch (error:unknown) {
    if( axios.isAxiosError(error) ){
      return{message:error.response?.data}
    }
    
  }
  
}

