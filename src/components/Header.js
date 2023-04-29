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
		</div>
	);
};

export default Header;
