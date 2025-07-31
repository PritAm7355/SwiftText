import React, {useState} from 'react'

export default function TextForm(props) {

  const[text, setText] = useState('');

  const handleUpClick =() =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    
  }

  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleOnChange =(event) =>{
    setText(event.target.value);   
  }

  const handleClClick =() =>{
    setText('');  
    props.showAlert("Text cleared!", "success"); 
  }

  const handleCopy = () => {
   navigator.clipboard.writeText(text);
   document.getSelection().removeAllRanges();
   props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extraspaces removed!", "success");
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const charCount = text.replace(/\s/g, "").length;
  
   
  return (
    <>
   <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{wordCount} words and {charCount} characters</p>
      <p>{0.008 * wordCount} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
