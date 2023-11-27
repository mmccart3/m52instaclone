import { useEffect, useState } from 'react';
import './App.css';

function App() {
// vanilla JS goes here
  const [photos,setPhotos] = useState([]);

  async function fetchImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    var data = await response.json();
    setPhotos(data);
  }
  useEffect(() => {
    fetchImages();
  },[]);
  //used to run fetchImages once 
 
  return (
    <div className="App">
      <h1>React Instagram Clone</h1>
      {photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="400px" alt="from picsum api" />
            <h2>{item.author}</h2>
          </div>
        )
      })}
    </div>
  );
}
export default App;
