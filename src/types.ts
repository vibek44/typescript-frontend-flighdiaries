
export enum Weather { 
  Sunny='sunny' ,
  Rainy='rainy' ,
  Cloudy='cloudy' ,
  Windy= 'windy' ,
  Stormy= 'stormy'
}

export enum Visibility {
  Great='great' ,
  Good='good' ,
  Ok= 'ok' ,
  Poor= 'poor'
}

export interface Diary{
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment?:string;
}

export type NewDiary=Omit<Diary, 'id'>;

//export type NonSensitiveDiaryEntry=Omit<Diary, 'comment'>;

export interface EntriesProps{
  addDiaries:(newDiary:NewDiary)=>void
}