import { useContext, useEffect } from "react";
import { UserConext } from "./userPRovider";
import { Card } from "./card";
export function Main() {
  const { state, getMovie } = useContext(UserConext);
  console.log(state);

  useEffect(() => {
    getMovie();
  }, []);
  //console.log("ddddddddd", state.users);
  return (
    <div className="cards">
      {state.loading && <p>로딩중...</p>}
      {state.error && <p>에러발생</p>}
      {!state.loading && state.movies && (
        <ul style={{ listStyle: "none" }}>
          {state.movies.results.map((item, idx) => {
            return <Card key={idx} movies={item} />;
          })}
        </ul>
      )}
    </div>
  );
}
