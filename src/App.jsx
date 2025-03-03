import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import { useState } from "react"


function App() {
  const[mode, setMode]=useState('light');//whether dark mode is enable or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <div>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}

      </div>
     
    </div>
  )
}

export default App
