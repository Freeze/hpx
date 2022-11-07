import './App.css';
import photos from "./photos";
import PhotoAlbum from "react-photo-album";

function App() {
  return (
    <div className="App">

      <div className="header">
        this is my header
      </div>

      <div className="main">
        <PhotoAlbum photos={photos} layout="masonry" />
      </div>

    </div>
  );
}

export default App;
