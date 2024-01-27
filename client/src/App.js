import './App.css';
import React, { useState } from 'react';
import Wordeditor from "./components/Wordeditor";

const App = () => {
  const [content, setContent] = useState();
  return (
    <>
      <div className="editor_btn">
        <a><button>LOGIN</button></a>
        <a><button>REGISTER</button></a>
      </div>
      <Wordeditor />
    </>
  );
}

export default App;
