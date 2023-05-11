import { Outlet } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h1>About Us Page</h1>
			<p>
				This is the Namaste React Live Course Chapter 07 - Finding the Path 🫡.
			</p>

			<Outlet />
		</div>
	);
};

export default About;
