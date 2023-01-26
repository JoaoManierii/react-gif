import React, { useState } from 'react';
import './style.css'


function GifList() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        {gifs.map(gif => (
          <div key={gif.id} className='cards'>
              <div className='card'>
                <img src={gif.images.original.url} alt={gif.title} />
              </div>
              <div className='card'>
                <img src={gif.images.original.url} alt={gif.title} />
              </div>
              <div className='card'>
                <img src={gif.images.original.url} alt={gif.title} />
              </div>
              <div className='card'>
                <img src={gif.images.original.url} alt={gif.title} />
              </div>
              <div className='card'>
                <img src={gif.images.original.url} alt={gif.title} />
              </div>
          </div>
        ))}
    </div>
  );
}

export default GifList;