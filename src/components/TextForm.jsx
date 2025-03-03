import React, {useState} from 'react'

export default function TextForm(props) {

  const[text, setText] = useState('');

  const handleUpClick =() =>{
    let newText = text.toUpperCase();
    setText(newText);
    
  }

  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange =(event) =>{
    setText(event.target.value);   
  }

  const handleClClick =() =>{
    setText('');   
  }

  const handleCopy = () => {
   var text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
   
  return (
    <>
   <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#6c757d':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text>0?text:'Enter something to preview it here'}</p>
    </div>
    </>
  )
}
