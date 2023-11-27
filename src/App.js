import { useEffect, useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from "./components/login"

function App() {
// vanilla JS goes here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photos,setPhotos] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);

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
      <Register
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setLoggedIn={setLoggedIn}>  
      </Register>
      <Login
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setLoggedIn={setLoggedIn}> 
      </Login>
      {loggedIn ? <h1>User Logged In</h1>: <h1>User Logged Out</h1>}
      {loggedIn && photos.map((item,index) => {
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
