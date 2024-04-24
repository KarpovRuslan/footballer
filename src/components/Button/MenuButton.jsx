/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function MenuButton({ children, ...props }) {
	return (
		<button className={props.isActive ? 'active' : 'menu-top-link'} {...props}>
			{children}
		</button>
	);
}
