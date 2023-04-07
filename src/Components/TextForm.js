import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('enter text here2');
    function handleConvert() {
        console.log("uupercase btn was clicked ");
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleOnChange(event) {
        console.log("handleOnChange");
        setText(event.target.value);
    }
    function clearText(event) {
        console.log("clearText");
        setText('');
    }
    return (
        <>
            <div>
                <h2>{props.head}</h2>
                <div className="form-group m-2">
                    {/* <label forHtml="exampleFormControlTextarea1">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary m-1" onClick={handleConvert}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary m-1" onClick={clearText}>clear Text</button>
            </div >
            <div className='summary m-3'>
                <h3>Your Text Summary </h3>
                <p>Your text has {text.split(" ").length} words and {text.length} characters </p>
            </div>
        </>
    )
}
