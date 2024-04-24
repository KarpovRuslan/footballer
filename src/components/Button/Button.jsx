/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Button({ children, onChange, onLogin }) {
	return <button onClick={onChange}>{children}</button>;
}
