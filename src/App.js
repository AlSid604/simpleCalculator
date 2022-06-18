import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);

  const handleKeyboard = function (e) {
    console.log(e.target.value);
  };

  const handleDisplay = function (e) {
    if (input !== 0 && e.target.className.includes("nums")) {
      const value = input + e.target.textContent;

      return setInput(value);
    }

    if (e.target.className.includes("minus")) {
      if (input.includes("-")) {
        return setInput(input);
      }
      let minusInput = input + e.target.textContent;
      return setInput(minusInput);
    }
    if (e.target.className.includes("plus")) {
      if (input.includes("+")) {
        return setInput(input);
      }
      let plusInput = input + e.target.textContent;
      return setInput(plusInput);
    }
    if (e.target.className.includes("decimal")) {
      if (input === "0") {
        console.log(input);
        let decimalInput = "0.1";
      }
      let decimalInput = input + e.target.textContent;
      return setInput(decimalInput);
    }

    if (e.target.className.includes("devide")) {
      if (input.includes("/")) {
        return setInput(input);
      }
      let devideInput = input + e.target.textContent;
      return setInput(devideInput);
    }

    if (e.target.className.includes("multiply")) {
      if (input.includes("*")) {
        return setInput(input);
      }
      let multiplyInput = input + e.target.textContent;
      return setInput(multiplyInput);
    }
    if (e.target.className.includes("leftBracket")) {
      if (input === 0) {
        return setInput(e.target.textContent);
      }
      let leftBracketInput = input + e.target.textContent;

      return setInput(leftBracketInput);
    }
    if (e.target.className.includes("rightBracket")) {
      let rightBracketInput = input + e.target.textContent;
      return setInput(rightBracketInput);
    }

    if (e.target.className.includes("equal")) {
      return setInput(eval(input).toFixed(2));
    }

    if (e.target.className.includes("erase")) return setInput(0);

    if (e.target.className.includes("nums"))
      if (e.target.textContent === "0") {
        return;
      }

    if (e.target.className.includes("delete")) {
      console.log(e.target.textContent);
      if (e.target.textContent === "←") {
        return setInput(0);
      }
      if (input === "0") {
        return setInput(0);
      }
      if (input.length > 1) {
        return setInput(input.slice(0, -1));
      }
      if (input.length === 1) {
        return setInput(0);
      }
    }

    return setInput(e.target.textContent);
  };

  return (
    <div className="container">
      <div id="display">{input}</div>
      <div className="buttons">
        <div className="button erase" onClick={handleDisplay}>
          C
        </div>
        <div className="button leftBracket " onClick={handleDisplay}>
          (
        </div>
        <div className="button rightBracket " onClick={handleDisplay}>
          )
        </div>
        <div className="button devide operator" onClick={handleDisplay}>
          /
        </div>
        <div className="button nums" onClick={handleDisplay}>
          7
        </div>

        <div className="button nums" onClick={handleDisplay}>
          8
        </div>

        <div className="button nums" onClick={handleDisplay}>
          9
        </div>

        <div className="button plus operator" onClick={handleDisplay}>
          +
        </div>
        <div className="button nums" onClick={handleDisplay}>
          4
        </div>
        <div className="button nums" onClick={handleDisplay}>
          5
        </div>
        <div className="button nums" onClick={handleDisplay}>
          6
        </div>
        <div className="button minus operator" onClick={handleDisplay}>
          -
        </div>
        <div className="button nums" onClick={handleDisplay}>
          1
        </div>
        <div className="button nums" onClick={handleDisplay}>
          2
        </div>
        <div className="button nums" onClick={handleDisplay}>
          3
        </div>

        <div className="button multiply operator" onClick={handleDisplay}>
          *
        </div>
        <div className="button  delete" onClick={handleDisplay}>
          &larr;
        </div>

        <div className="button nums" onClick={handleDisplay}>
          0
        </div>

        <div className="button decimal " onClick={handleDisplay}>
          .
        </div>

        <div id="equal" className="button equal" onClick={handleDisplay}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
