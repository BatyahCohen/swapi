"use client"

import React, { useEffect, useState } from "react";
import styles from "../Styles/Movie.module.css";
interface MovieProps {
  movie: Film;
  isFavorite: boolean;
  onToggleFavorite: (episode_id: number) => void;
}

const Movie: React.FC<MovieProps> = ({ movie, isFavorite, onToggleFavorite }) => {
  const [like, setLike] = useState(false)

  useEffect(() => {
    setLike(isFavorite)
  }, [])

  return (
    <div className={styles.movie}>
      <div>
        <h3>{movie.title}</h3>
        <p>Directed by: {movie.director}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
      <button
        className={`${styles.likeButton} ${isFavorite ? styles.liked : ""}`}
        onClick={() => {
          onToggleFavorite(movie.episode_id);
          setLike(!like);
        }}
      >
        {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Movie;
