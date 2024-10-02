import { createContext, useReducer } from "react";

export const UserConext = createContext();

export function UserProvider({ children }) {
  const iniState = {
    loading: false,
    error: null,
    movies: null,
    posts: null,
  };
  const [state, dispatch] = useReducer(reducer, iniState);
  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "GETMOVIE":
        return { ...state, loading: false, movies: action.movies };
      case "GETPOST":
        return { ...state, loading: false, posts: action.posts };
      case "ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        throw new Error(`액션오류${action.type}`);
    }
  }

  const getMovie = async () => {
    dispatch({ type: "LOADING" });
    try {
      const key = import.meta.env.VITE_GITHUB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&language=ko-kr`
      );
      const movies = await response.json();
      dispatch({ type: "GETMOVIE", movies });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.massage });
    }
  };
  //   const getPost = async () => {
  //     dispatch({ type: "LOADING" });
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts?userId=1"
  //       );
  //       const posts = await response.json();
  //       dispatch({ type: "GETPOST", posts });
  //     } catch (e) {
  //       dispatch({ type: "ERROR", error: e.massage });
  //     }
  //   };

  return (
    <UserConext.Provider value={{ state, getMovie }}>
      {children}
    </UserConext.Provider>
  );
}
