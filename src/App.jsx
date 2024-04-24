import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuTop from './components/MenuTop';
import Euro from './components/MenuSection/Euro';
import Favorites from './components/MenuSection/Favorites';
import PremierLeague from './components/MenuSection/PremierLeague';
import Upl from './components/MenuSection/Upl';
import World from './components/MenuSection/World';
import ChampionsLeague from './components/MenuSection/ChampionsLeague';

function App() {
	const [tab, setTab] = useState('fav');

	return (
		<>
			<Header />
			<MenuTop active={tab} onChange={(current) => setTab(current)} />
			{tab === 'fav' && <Favorites />}
			{tab === 'premierLeague' && <PremierLeague />}
			{tab === 'upl' && <Upl />}
			{tab === 'euro' && <Euro />}
			{tab === 'championsLeague' && <ChampionsLeague />}
			{tab === 'world' && <World />}
		</>
	);
}

export default App;
