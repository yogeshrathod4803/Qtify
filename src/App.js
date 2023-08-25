import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar/navbar.jsx";
import HeroSection from "./Components/Hero-Section/hero-section.jsx";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./Api/api";
import Section from "./Components/Section/section.jsx";
import styles from "../src/App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songData, setSongData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  const generateSongData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songData.filter((item) => item.genre.key === key);
    filteredData(res);
    // console.log(res);
  };

  useEffect(() => {
    generateSongData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  async function fetchAlbumsData() {
    try {
      const albumsResponse = await fetchTopAlbums();
      setTopAlbums(albumsResponse);
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  }

  async function fetchNewAlbumsData() {
    try {
      const newAlbumsResponse = await fetchNewAlbums();
      setNewAlbums(newAlbumsResponse);
    } catch (error) {
      console.error("Error fetching new albums:", error); // Changed the error message
    }
  }

  useEffect(() => {
    fetchAlbumsData();
    fetchNewAlbumsData();
  }, []);

  async function fetchAllSongs() {
    try {
      const songsResponse = await fetchSongs();
      setSongData(songsResponse);
      setFilteredDataValues(songsResponse);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    fetchAllSongs();
  }, []);

  // console.log(filteredDataValues[1]);
  // console.log(filteredData);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section
          type="albums"
          title="Top Albums"
          data={topAlbums}
          filteredDataValues={topAlbums}
        />
        <Section
          type="albums"
          title="New Albums"
          data={newAlbums}
          filteredDataValues={newAlbums}
        />
        <Section
          type="songs"
          title="Songs"
          data={songData}
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
