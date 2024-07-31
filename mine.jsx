import { useState } from "react";
import "./mine.css";
function Board({ string, doSomething }) {
  return (
    <button className="square" onClick={doSomething}>
      {string}
    </button>
  );
}
function winner(square) {
  const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < pattern.length; i++) {
    const [a, b, c] = pattern[i];
    if (square[a] && square[a] == square[b] && square[b] == square[c]) {
      return square[a];
    }
  }
  return null;
}

export default function Main() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xNext, setNext] = useState(true);
  let toStore = history[history.length - 1];
  function handleclick(i) {
    if (square[i] || winner(square)) {
      return;
    }
    const next_array = square.slice();

    if (!xNext) {
      next_array[i] = "O";
      setNext(true);
    } else if (xNext) {
      next_array[i] = "X";
      setNext(false);
    } else {
      alert("error");
    }
    setSquare(next_array);
  }
  return (
    <>
      <div className="board-row">
        <Board string={square[0]} doSomething={() => handleclick(0)} />
        <Board string={square[1]} doSomething={() => handleclick(1)} />
        <Board string={square[2]} doSomething={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Board string={square[3]} doSomething={() => handleclick(3)} />
        <Board string={square[4]} doSomething={() => handleclick(4)} />
        <Board string={square[5]} doSomething={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Board string={square[6]} doSomething={() => handleclick(6)} />
        <Board string={square[7]} doSomething={() => handleclick(7)} />
        <Board string={square[8]} doSomething={() => handleclick(8)} />
      </div>
    </>
  );
}
