import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StartScreen } from "./StartScreen";
import { GameScreen } from "./GameScreen";

//App just gives the routes for the different pages
function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} /> 
        <Route path="/game" element={<GameScreen />} /> 
      </Routes>
    </Router>
  );
}

export default App;