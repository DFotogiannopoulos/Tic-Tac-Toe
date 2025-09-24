import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function GameScreen(){
    const location = useLocation(); // hook to receive from StartScreen
    const navigate = useNavigate(); // hook to navigate
    const {player1, player2} = location.state || {}; // receive names from StartScreen

    const [turn, setTurn] = useState(`${player1} plays!`); // handle #turn
    const [symbol, setSymbol] = useState("X"); // handle/switch symbols
    const [board, setBoard] = useState(Array(9).fill("")); // update board on every click
    const [gameOver, setGameOver] = useState(false); // handle board when game is over

    function handleCellClick(index: number) { // handle click on cell
        if (board[index] !== "" || gameOver) return; //if the cell is not empty and gameOver is true return

        const newBoard = [...board]; // create copy of board everytime to update it
        newBoard[index] = symbol;
        setBoard(newBoard);

        const winner = checkIfOver(newBoard, player1, player2); //check if the game is over on each click
        
        if (winner === player1 || winner === player2) { // handle win
            setTurn(`${winner} wins!`);
            setGameOver(true);
        } else if (winner === "Tie") { // handle tie
            setTurn("It was a boring tie...");
            setGameOver(true);
        } else {
            // Switch turns
            if (symbol === "X") {
                setSymbol("O");
                setTurn(`${player2} plays!`);
            } else {
                setSymbol("X");
                setTurn(`${player1} plays!`);
            }
        }
    }

    function checkIfOver(cells: string[], name1: string, name2: string) {
        const winPatterns = [ // all win paterns
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (const pattern of winPatterns) { // for every win pattern check if the pattern contain same symbols
            const [a, b, c] = pattern;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                if(cells[a]=="X"){ //return winner
                    return name1; 
                }else{
                    return name2;
                }
            }
        }

        if (cells.every(cell => cell !== "")) { //if there are not empty cells and no winner return tie
            return "Tie";
        }

        return "Play"; // if no tie, no winner continue playing 
    }

    function handleRestart(e: React.FormEvent) { // navigate to StartScreen for new game
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <div className="container"> 
                <div id="turn">{turn}</div> {/* Sets who plays, winner or tie. */}
                <main>
                    <input 
                        type="submit" 
                        id="restart" 
                        className="new-game-btn" 
                        value="NEW GAME"
                        onClick={handleRestart}
                    />  {/* On restart call handleRestart which leads StartScreen*/}
                    <div className="grid-container" id="game-grid">
                        {board.map((cell, index) => (
                            <div 
                                key={index}
                                className={`cell ${cell ? 'show' : ''}`}
                                onClick={() => handleCellClick(index)}
                                style={{ cursor: gameOver ? 'not-allowed' : 'pointer' }}
                                data-mark={cell}
                            >
                                {cell}
                            </div>
                        ))} {/* For every cell of the map call the handleCellClick with the index of the cell*/}
                    </div>
                </main>
            </div>
            <footer><p>© Copyright | Tic-Tac-Toe <br/> Dimitrios Fotogiannopoulos</p></footer>
        </>
    )
}