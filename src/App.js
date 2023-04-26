import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateBookmark from './components/CreateBookmark';
import CloudinaryUploadWidget from "./components/CloudinaryUploadWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
          <CreateBookmark />
          <CloudinaryUploadWidget  />
          <img id="uploadedimage" src=""></img>

        
      </header>
    </div>
  );
}

export default App;
