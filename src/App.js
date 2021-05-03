import { useState } from 'react';
import './App.css';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import Settings from './components/Settings/Settings';

function App() {
	const [displayGame, setDesiplayGame] = useState(false);
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
		win: 0
	})
	const [result, setResult] = useState(false);

  	return (
    	<div className="App flexCenter">
    	  	{ !displayGame && <Settings setDesiplayGame={setDesiplayGame} setDimensions={setDimensions} /> }

    	  	{ displayGame && <Game setResult={setResult} dimensions={dimensions} /> }

			{ result && <Result result={result} setResult={setResult} setDesiplayGame={setDesiplayGame} /> }
    	</div>
  	);
}

export default App;
