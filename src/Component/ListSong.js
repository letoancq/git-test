import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdsong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdsong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdsong(song.id);
  },[song])
  return (
    <div className="col-span-2 overflow-y-scroll bg-green-600 ">
      <table className="table-auto w-full ">
        <thead className="text-white h-12 ">
          <tr >
            <th className="w-[10%] ">#</th>
            <th className="text-left ">Title</th>
            <th className="w-[10%] ">Author</th>
            <th>
              <i className="w-[10%] fa fa-download" />
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:text-teal-300 cursor-pointer ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
