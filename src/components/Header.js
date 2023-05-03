import { useState } from 'react';

const loggedInUser = () => {
	// API call to check authentication
	return true;
};

const Title = () => (
	<a href='/'>
		<img
			className='logo'
			alt='logo'
			src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL9bhJXk8totURVHPPIDg2cMdLJxEqkAaqR2YDRgwx1Bk0F5ihRvqSWy_S-C2YDnj2j8&usqp=CAU'
		/>
	</a>
);

const Header = () => {
	const [isLoggedIn, setLoggedIn] = useState(true);

	return (
		<div className='header'>
			<Title />
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
			{isLoggedIn ? (
				<button onClick={() => setLoggedIn(false)}>Login</button>
			) : (
				<button onClick={() => setLoggedIn(true)}>Logout</button>
			)}
		</div>
	);
};

export default Header;
