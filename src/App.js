import React, { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Alerts from './component/Alerts';
import TextForms from './component/Textforms';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(" ");

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black'
      showAlert("Dark mode has been enable","success");
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enable","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForms heading="Enter text below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
