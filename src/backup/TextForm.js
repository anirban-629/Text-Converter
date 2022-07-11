import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("CoNvErTeR");

  // text='asaf' //--> this is incorrect way to change the text we need to use the method setText('asaf)

  const upperCase = () => {
    // console.log('Button Clicked text is: '+text);
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const clear = () => {
    setText("");
  };

  const addUnderScore = () => {
    let abc=text.split(' ')
    let unds=abc.join('_')
    setText(unds);
  };

  const onChng = (event) => {
    // console.log('Changed');
    setText(event.target.value); // --> updating the value suddenly after clicking the key... [key = a,b,c,d,...]
  };

  return (
    <>
      {/* <h1>{props.heading}-{text}</h1> */}
      <div className="row">
        <div className="col-lg-6">
          <h1>{props.heading}</h1>
          <div className="mb-3 my-2">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={onChng}
            ></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <h3>Summary</h3>
          <p>No. of Words: {text.split(" ").length}</p>
          <p>No. of Characters: {text.length}</p>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-4">
              <button
                className="btn btn-info text-dark mx-1 my-1"
                onClick={upperCase}
              >
                Convert to UpperCase
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="btn btn-info text-dark mx-1 my-1"
                onClick={lowerCase}
              >
                Convert to LowerCase
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="btn btn-info text-dark mx-1 my-1"
                onClick={clear}
              >
                Clear
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="btn btn-info text-dark mx-1 my-1"
                onClick={addUnderScore}
              >
                Underscorer
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "CoNvErTeR",
};
