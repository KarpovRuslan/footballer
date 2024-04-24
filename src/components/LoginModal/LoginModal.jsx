/* eslint-disable react/prop-types */
export default function LoginModal({ onClose }) {
	return (
		<div className="modal">
			<div>I'm a modal dialog</div>
			<button onClick={onClose}>Close</button>
		</div>
	);
}
