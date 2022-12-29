import React from 'react';
import {useState} from 'react';

const TicTacToe = () => {
    
  /*Set variables with useState*/
  const [counter, setCounter] = useState(0);
  const [mark, setMark] = useState("X");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(["","","","","","","","",""]);

  /*Set mark when clicking*/
  const changeMark = (i) => {
    if (board[i] == "") {
      board[i] = mark
      setCounter(counter + 1);
      if (mark == "X") {
        setMark("O")
      } else if (mark == "O") {
        setMark("X")
      }
      checkWinner()
    }
  }

  /*Check winner each round*/
  const checkWinner = () => {
    if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
      setWinner("Winner: X")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
      setWinner("Winner: O")
      setCounter("w")
      for (let i = 0; i < board.length; i++) {
        if(board[i] == "") {
          board[i] = "-";
        }
      }
    } else if (counter == 8) {
      setWinner("Draw")
      setCounter("w")
    }
  }

  /*Reset game*/
  const reset = () => {
    setCounter(0)
    setMark("X")
    setBoard(["","","","","","","","",""])
    setWinner("")
  }

    return (
        <main>
          <p>{counter === 0 ? "Start playing, X goes first." : counter === "w" ? `${winner}` :`Now playing: ${mark}`}</p>                                                                 
          <div className="board">   
              <button className="square" onClick={() => changeMark(0)}>{board[0]}</button>      
              <button className="square" onClick={() => changeMark(1)}>{board[1]}</button>      
              <button className="square" onClick={() => changeMark(2)}>{board[2]}</button>      
              <button className="square" onClick={() => changeMark(3)}>{board[3]}</button>      
              <button className="square" onClick={() => changeMark(4)}>{board[4]}</button>      
              <button className="square" onClick={() => changeMark(5)}>{board[5]}</button>      
              <button className="square" onClick={() => changeMark(6)}>{board[6]}</button>      
              <button className="square" onClick={() => changeMark(7)}>{board[7]}</button>      
              <button className="square" onClick={() => changeMark(8)}>{board[8]}</button>
          </div>
          <button className="reset" onClick={() => reset()}>{winner ===  "" ? "Reset game" : "Play again"}</button>
        </main>
    )
}

export default TicTacToe