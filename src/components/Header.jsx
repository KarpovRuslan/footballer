import { useEffect, useState } from 'react';

export default function Header() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="header">
			<h2>
				<strong>Footballer : </strong> Statistic site for football lovers
			</h2>
			<p>
				Time now: <span>{now.toLocaleTimeString()}</span>
			</p>
		</section>
	);
}
