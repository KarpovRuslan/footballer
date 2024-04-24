/* eslint-disable react/prop-types */
import { FaRegStar } from 'react-icons/fa';
import MenuButton from './Button/MenuButton';

export default function MenuTop({ active, onChange }) {
	return (
		<section className="menu-top-wrapper">
			<MenuButton onClick={() => onChange('fav')} isActive={active === 'fav'}>
				<FaRegStar />
				<p className="menu-top-fav">Favorites</p>
			</MenuButton>
			<MenuButton
				onClick={() => onChange('premierLeague')}
				isActive={active === 'premierLeague'}
			>
				Premier League
			</MenuButton>
			<MenuButton onClick={() => onChange('upl')} isActive={active === 'upl'}>
				UPL
			</MenuButton>
			<MenuButton onClick={() => onChange('euro')} isActive={active === 'euro'}>
				Euro
			</MenuButton>
			<MenuButton
				onClick={() => onChange('championsLeague')}
				isActive={active === 'championsLeague'}
			>
				Champions League
			</MenuButton>
			<MenuButton
				onClick={() => onChange('world')}
				isActive={active === 'world'}
			>
				World Championship
			</MenuButton>
		</section>
	);
}
