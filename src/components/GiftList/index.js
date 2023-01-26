import React, { useState } from 'react';
import './style.css'
import { useTheme, themes } from "../../Context/LikeContext";


function GifList({ children }) {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, setTheme } = useTheme();

  function fetchGif() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=0KsgY9RDhjhS6Nrvxaojmz7FYvEi21fQ&q=${searchTerm}&limit=20`)
      .then(response => response.json())
      .then(data => setGifs(data.data))
      .catch(error => console.log(error));
  }


  return (
    <div>
      <h2>Gif De Malandro</h2>
      <input type="text" value={searchTerm} onBlur={fetchGif} onChange={e => setSearchTerm(e.target.value)} placeholder="Procura o gif q vc quer aqui malandro" />
      <div className='cards'>
        {gifs.map(gif => (

          <div key={gif.id} className='card'>
            <img src={gif.images.original.url} alt={gif.title} />

            <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {children}
      <hr />
      <button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {theme === themes.light ? "Toggle dark mode" : "Toggle light mode"}
      </button>
    </div>
          </div>
        ))}  </div>
    </div>
  );
}

export default GifList;