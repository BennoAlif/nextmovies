import { getMovieData, getMovieIds } from "../../lib/movies";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Movie({ movie }) {
  return (
    <Layout>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={`${movie.title} Backdrop`}
      />
      <h1>{movie.title}</h1>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getMovieIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const movie = await getMovieData(params.id);
  return {
    props: {
      movie,
    },
  };
}
