"use client"

import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import getswapi from "@/Services/getData";
import { getFavoritsStorage, setFavoritsStorage } from "@/Services/favoritsLocalStorage";
import styles from "../Styles/MoviesContainer.module.css"; 

const MoviesContainer = () => {
  const [movies, setMovies] = useState<Film[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getswapi();
        setMovies(response.results);
        console.log(response)
      } catch (error: any) {
        console.error("Failed to fetch movies:", error.message);
      }
    };

    const storedFavorites = getFavoritsStorage();
    setFavorites(storedFavorites);

    fetchMovies();
  }, []);

  const toggleFavorite = (episode_id: number) => {
    setFavoritsStorage(episode_id.toString());
  };

  return (
    <div className={styles["moviesContainer"]}>
      <h2 className={styles.title}>Star Wars Films</h2>
      <div className={styles["movieList"]}>
        {movies.map((movie: Film) => (
          <Movie
            key={movie?.episode_id}
            movie={movie}
            isFavorite={favorites.includes((movie.episode_id).toString())}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
