import React from "react";
import { apiEntity } from "../apiConfig";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";
import Layout from "../components/Layout/Layout";
import TopMovies from "../components/TopMovies/TopMovies";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <TopMovies />
        <Separator height={"40px"} />
        <Carousel
          entity={apiEntity.popularMovies}
          title={"Peliculas populares"}
        />
        <Separator height={"40px"} />
        <Carousel
          entity={apiEntity.topRatedMovies}
          title="Peliculas mejor puntuadas"
        />
        <Separator height={"40px"} />
        <Carousel entity={apiEntity.popularTv} title="Series populares" />
        <Separator height={"40px"} />
        <Carousel
          entity={apiEntity.topRatedTv}
          title="Series mejor puntuadas"
        />
      </Layout>
    </>
  );
};

export default Homepage;
