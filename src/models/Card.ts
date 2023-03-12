export enum Options {
    subcribe = "subcribe",
    unsubcribe = "unsubcribe",
  }
  
  export type UserCard = {
    title?: string;
    name: string;
    release_date: string;
    genre_ids: string[];
    overview: string;
    vote_average: number;
    backdrop_path: string;
  };