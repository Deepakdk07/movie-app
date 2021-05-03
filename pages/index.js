import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../utils/requests";
// import styles from '../styles/Home.module.css'

export default function Home({results}) {
  console.log(results)
  return (
    <div>
      <Head>
        <title>MOVIE : DataBase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Results */}
      <Results results = {results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}` 
  ).then((res) => res.json());

  return {
   props: {
     results: request.results,
   }
  }
}
