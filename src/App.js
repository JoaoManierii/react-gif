import './App.css';
import GifList from './components/GiftList';
import Container from './components/Like';
import Like from './Context/LikeContext';

function App() {
  
  
  return (
    <div>
<Like>
  <GifList/>
  </Like>
    </div>
  );
}

export default App;
