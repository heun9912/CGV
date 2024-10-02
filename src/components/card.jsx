import { useContext, useEffect } from "react";
import { UserConext } from "./userPRovider";

export function Card({ movies }) {
  console.log(movies);
  return (
    <div className="card">
      <img
        className="moviePoster"
        src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        alt="영화 포스터"
      />
      <p className="title">{movies.title}</p>
    </div>
  );
}
