import React from 'react'
import { useState } from 'react';

export default function TextForms(props) {

    const handleUpClick = () => {

        let newtext = text.toUpperCase();
        setText(newtext);

    };

    const handleLowerClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);

    };

    const handleRemoveClick = () => {

        let newtext = text.replace(text, '');
        setText(newtext);

    };

    const handleCopy = () => {

        let text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces = () => {

        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    };

    const handleOnChange = (event) => {

        setText(event.target.value)

    };

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="my-box" rows="8" placeholder='Enter text here'></textarea>
                    <br></br>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>Remove Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>History</h1>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                {/* <p>{0.008 * text.trim().length}</p> */}
                <p>{text.length > 0 ? text : "Enter something in textbox"}</p>
            </div>
        </>
    )
}
