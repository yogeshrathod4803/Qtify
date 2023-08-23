import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar/navbar.jsx";
import HeroSection from "./Components/Hero-Section/hero-section.jsx";
import { fetchTopAlbums } from "./Api/api";
import Section from "./Components/Section/section.jsx";
import styles from "../src/App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  async function fetchAlbumsData() {
    try {
      const albumsResponse = await fetchTopAlbums(); // Assuming this function fetches data
      setTopAlbums(albumsResponse); // Assuming the response is an array of album objects
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  }

  useEffect(() => {
    fetchAlbumsData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section type="albums" title="Top Albums" data={topAlbums} />
      </div>
    </>
  );
}

export default App;
