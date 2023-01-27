import React, { useState } from 'react';
import './style.css'
import { useLike, likes } from "../../Context/LikeContext";
import { Heart } from "phosphor-react";

function GifList({ children }) {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { like, setLike } = useLike();

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

            >
              {children}
              <hr />

              <Heart style={{
                color: like.includes(gif.id) ? "red" : "black"
              }} size={32} onClick={() => {
                if (like.includes(gif.id)) {
                  setLike(like.filter(item => item !== gif.id));
                  return
                }
                setLike([...like, gif.id])
              }} />

            </div>
          </div>
        ))}  </div>
    </div>
  );
}

export default GifList;