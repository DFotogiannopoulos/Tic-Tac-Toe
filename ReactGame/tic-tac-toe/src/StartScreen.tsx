import { useState } from 'react'

import indexLogo from './assets/index_logo.png'
import {useNavigate} from 'react-router-dom';

export function StartScreen() {
    const [player1,setPlayer1] = useState("");
    const [player2,setPlayer2] = useState("");
    const navigate = useNavigate();


    const handleStart = (e: React.FormEvent) =>{
        e.preventDefault();
        if (player1 && player2){
            navigate(`/game`,{state:{player1,player2}});
        }
    }
  return (
    <>
        <div className="container">
            <main>
                <img id="logo" src={indexLogo} alt="logo"/>
                <form onSubmit={handleStart}>
                    <div className="inputs">
                        <div className="name">
                            <label>Player 1 name:</label>
                            <input id="player1" type="text" name ="player" value={player1} onChange={e => setPlayer1(e.target.value)} required/>
                        </div>
                        <div className="name">
                            <label>Player 2 name:</label>
                            <input id="player2" type="text" name="player" value={player2} onChange={e => setPlayer2(e.target.value)} required/>
                        </div>
                    </div>
                    <input id ="start-btn" className="start-btn" type="submit" value="START"/>
                </form>
            </main>
        </div>
        <footer><p>© Copyright | Tic-Tac-Toe <br/> Dimitrios Fotogiannopoulos</p></footer>
    </>
  )
}

