import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { getMovies } from "../lib/movies";

export async function getStaticProps() {
  const movies = await getMovies();
  return {
    props: { movies },
  };
}

export default function Home({ movies }) {
  return (
    <Layout home>
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <h1 className="title">Welcome to Next Movies!</h1>

        <div className="grid">
          {movies.results.map(({ id, release_date, title, backdrop_path }) => (
            <Link href="/movies/[id]" as={`/movies/${id}`} key={id}>
              <a className="card">
                <img
                  className="backdrop"
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={title}
                />
                <div className="movie-item">
                  <h3>{title}</h3>
                  <p>{release_date}.</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
    </Layout>
  );
}
