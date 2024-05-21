import axios from "axios";
import { Diary } from "../types";

export const getAllDiaries=()=>{
   return axios.get<Diary[]>('http://localhost:3001/api/diaries').then(res=>res.data)
}

