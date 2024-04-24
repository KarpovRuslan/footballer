import { useEffect, useState } from 'react';
import Button from './Button/Button';
import { FaSearch, FaRegUser, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import LoginModal from './LoginModal/LoginModal';

export default function Header() {
	const [now, setNow] = useState(new Date());
	const [showModal, setShowModal] = useState(false);
	const [darkMode, setDarkMode] = useState(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	function handleChangeDarkMode() {
		setDarkMode(!darkMode);
	}

	function handleLogin() {
		setShowModal(true);
	}

	return (
		<section className="header">
			<h2>
				<strong>Footballer : </strong> Statistic site for football lovers
			</h2>
			<div className="header-right-wrapper">
				<p>
					Time now: <span>{now.toLocaleTimeString()}</span>
				</p>
				<div className="btn-wrapper">
					<Button>
						<FaSearch />
					</Button>
					<Button onLogin={handleLogin}>
						<FaRegUser />
						<p className="btn-wrapper-button">Login</p>
					</Button>
					<Button onChange={handleChangeDarkMode}>
						{darkMode ? <FaToggleOn /> : <FaToggleOff />}
						{darkMode ? (
							<p className="btn-wrapper-button">Dark mode</p>
						) : (
							<p className="btn-wrapper-button">Light mode</p>
						)}
					</Button>
				</div>
			</div>
		</section>
	);
}
