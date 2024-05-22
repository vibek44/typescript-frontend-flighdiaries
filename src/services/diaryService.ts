import axios from "axios";
import { Diary } from "../types";
const baseUrl='http://localhost:3001/api/diaries'
import { NewDiary } from "../types";

export const getAllDiaries=()=>{
   return axios.get<Diary[]>(baseUrl).then(res=>res.data)
}

export const createDiaries=(diaryObject:NewDiary)=>{
  return axios.post<Diary>(baseUrl,diaryObject).then(res=>res.data)
}

