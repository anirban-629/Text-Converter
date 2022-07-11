import React, { useState } from "react";

export default function TextForm2(props) {
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
    let abc = text.split(" ");
    let unds = abc.join("_");
    setText(unds);
  };

  const onChng = (event) => {
    // console.log('Changed');
    setText(event.target.value); // --> updating the value suddenly after clicking the key... [key = a,b,c,d,...]
  };

  const [mode, setMode] = useState("Dark");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [find, setFind] = useState("Find the Word");

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("Light");
      setStyle({
        color: "White",
        backgroundColor: "Black",
      });
    } else {
      setMode("Dark");
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const privewCol = {
    color: "black",
  };

  const copyText = () => {
    let txt = document.getElementById("exampleFormControlTextarea1");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };

  const findWord = () => {
    let finding = document.getElementById("findingWord");
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (finding.value === words[i]) {
        setFind(`${finding.value} found at Positon ${i}`);
        setTimeout(() => {
          setFind("");
        }, 5000);
        break;
      } else {
        setFind("Word not found");
        setTimeout(() => {
          setFind("");
        }, 5000);
      }
    }
  };

  const onChng2 = (event) => {
    setFind(event.target.value);
  };

  return (
    <>
      <div className="main" style={style}>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-5">
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
            <div className="col-lg-4">
              <h3>Summary</h3>
              <p>No. of Words: {text.split(" ").length}</p>
              <p>No. of Characters: {text.length}</p>
            </div>
            <div className="col-lg-3">
              <button
                className="btn btn-info text-dark mx-1 my-1"
                onClick={toggleMode}
              >
                {mode}
              </button>
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
                <div className="col-lg-3">
                  <button
                    className="btn btn-info text-dark mx-1 my-1"
                    onClick={copyText}
                  >
                    Copy Text
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Preview</h2>
              <div className="h-100 p-5 bg-light border rounded-3">
                <p style={privewCol}>{text}</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-4">
              <textarea
                className="form-control"
                id="findingWord"
                rows="4"
                value={find}
                onChange={onChng2}
              ></textarea>
              <button
                className="btn btn-info text-dark mx-1 my-4"
                onClick={findWord}
              >
                Find Word
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm2.defaultProps = {
  heading: "CoNvErTeR",
};
