import React from 'react'

function calculateWinner(squares) {
    
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.indexOf(null) === -1) {
        return 'Tie'
    }
    
    return null;
}

// Disables all squares:
function disableSquares() {
  const dis = document.getElementsByClassName("square");

  let t;
  for (t=0; t<dis.length; t++) {
    dis[t].disabled = true;
  }

}

function Square(props) {
    
  return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
    return (
        <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        
  />
    )
  }

  render() {
    
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}




class Tictactoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            humanTurn: null,
            scores: {
              'X': -10,
              'O': 10,
              'Tie': 0
            },
            ai: 'O',
            human: 'X',
            isORobotMax: true
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            humanTurn: !this.state.humanTurn,
        });
      }
    
     jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            
        })

    }

    minimax(board, depth, isMaximizing) {
      let result = calculateWinner(board);
      if (result !== null) {
        // console.log('result: ', result)
        return this.state.scores[result];
      }
      if (isMaximizing) {
        let bestScore = -Infinity;
        let k;
        for (k = 0; k < 10; k++) {
          // Is the spot available?
          if (board[k]===null) {
            board[k]=this.state.ai;
            let isORobotMax = this.state.isORobotMax
            let score = this.minimax(board, depth + 1, !isORobotMax); //false 
            board[k] = null;
            bestScore = Math.max(score, bestScore)
            // console.log('bestScore: ', bestScore)
          }
        }
        // alert(board[0] + board[1] + board[2] + "\n" +
        //   board[3] + board[4] + board[5] + "\n" +
        //   board[6] + board[7] + board[8] + "\n :" + bestScore + "k: " + k
        // )
        return bestScore;
      } else {
        let bestScore = Infinity;
        let m;
        for (m = 0; m < 9; m++) {
          // Is the spot available?
          if (board[m]===null) {
            board[m]=this.state.human;
            let isORobotMax = this.state.isORobotMax
            let score = this.minimax(board, depth + 1, isORobotMax); //true 
            board[m] = null;
            bestScore = Math.min(score, bestScore)
          }
        }
        return bestScore;
      }
    }

    bestMove(board) {
      // AI to make its turn
      let bestScore = -Infinity;
      let move;
      let j;
      for (j = 0; j < 9; j++) {
        // Is the spot available?
        if (board[j] === null) {
          board[j] = this.state.ai;
          let score = this.minimax(board, 0, false);
          
          board[j] = null;
          if (score > bestScore) {
            // console.log('score: ',score);
            // console.log('bestScore: ',bestScore);
            
            bestScore = score;
            move = j;
          }
        }
      }
      return move;
    }

    async nextTurn(board) {
      await new Promise(r => setTimeout(r, 250));
      // const board = this.state.history[this.state.history.length - 1]
      const squares = board.squares.slice();
      // const history = this.state.history.slice(0, this.state.stepNumber + 1);
      var theMove = this.bestMove(squares);
      this.handleClick(theMove);
      console.log('this.state.xIsNext: ',this.state.xIsNext);
    }

    pickStart() {
      return(
        <div>
        <button
          onClick={() => {
            console.log('in quishy start');
            
            // ***
            // disableSquares();
            // ***
            
            this.setState ({
              humanTurn: true,
            })
          }}>Squishy start</button>
        <button
          onClick={() => {
            console.log('in robot start.');
            this.setState ({
              humanTurn: false,
              ai: 'X',
              human: 'O',
              isORobotMax: false
            
              // 'X': -10,
              // 'O': 10,
              // 'Tie': 0
            })
          }}>Robot start</button>
        </div>
      )
    }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const humanTurn = this.state.humanTurn;
    // const moves =
    history.map((step, index) => {
        const desc = index ?
            'Go to move #' + index :
            'Go to game start';
        return (
            <li key={index}>
                <button
                  onClick={() => this.jumpTo(index)}>{desc}
                </button>
            </li>
        );
    });
    let status;
    let choose;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        if (humanTurn===null) {
          choose = this.pickStart();
        } else {
          if (humanTurn===false) {
            this.nextTurn(current, this.state.xIsNext)
          }
        }
        status = 'Next Player: ' + (this.state.xIsNext ? 'X' : '0');
    }

   
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>HumanTurn:{this.state.humanTurn}</div>
          <div>{choose}</div>
          <div>{status}</div>
          
          {/* <ol>{moves}</ol> */}
          
        </div>
      </div>
    );
  }
}

// ========================================


export default Tictactoe;

