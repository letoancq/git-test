import { useState } from "react";
import "./App.css";
import DetailSong from "./Component/DetailSong";
import ListSong from "./Component/ListSong";
import Navbar from "./Component/Navbar";
import Playing from "./Component/Playing";
import { Songs } from "./Context.js";
import DataSongs from "./unit/songs.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="Ap">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden ">
          <DetailSong />

          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
