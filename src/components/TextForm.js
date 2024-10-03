import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowerClick = ()=>{
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
    props.showAlert("Converted to lowercase!", "success");

  }

  const handleClearClick =()=>{
    let newLowerText = "";
    setText(newLowerText);
    props.showAlert("Clear text!", "success");

}
  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value)
  };
  const [text, setText] = useState("");
  // text ="new"; // wrong way to set the text
  // setText("new"); // correct way to change the state
  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-secondary mx-2" onClick={handleLowerClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>
        Clear
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    {/* <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words, {text.length} Characters</p> */}

    <p>{0.008 * text.split(" ").length} Words, {text.length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>

    </>
  );
}
