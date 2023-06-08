import React, { useState } from 'react';



export default function TextForm(props) {

    const [text,setText] = useState('');

const handleOnChange = (event) =>{
    setText(event.target.value)
}


const handleOnClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
}

  return (
    <>    <div className="container">
        <h1>{props.head}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert To Uppercase</button>
    </div>

    <div className="container">
        <h3>{text.split(' ').length} Words </h3>
        <h3>{text.length} Character </h3>
        <h3>{0.004  / text.split(' ').length} Time take to read words </h3>
        <h3>Preview</h3>
        <pre>{text}</pre>
    </div>
    </>

  )
}
