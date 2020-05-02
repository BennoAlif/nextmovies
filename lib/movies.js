import fetch from "node-fetch";

export async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=?"
  );
  return res.json();
}

export async function getMovieIds() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=?"
  );
  const data = await res.json();
  return data.results.map(({ id }) => {
    return {
      params: {
        id: id+""
      },
    };
  });
}

export async function getMovieData(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=?`
  );
  return res.json();
}
