import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<div className='border border-black p-2 m-2'>
			<h3 className='font-bold text-xl'>{title}</h3>

			{isVisible ? (
				<>
					<button
						className='curser-pointer px-4 py-1 bg-pink-500 rounded-md font-bold hover:opacity-70'
						onClick={() => setIsVisible()}
					>
						hide
					</button>
					<p>{description}</p>
				</>
			) : (
				<button
					className='curser-pointer px-4 py-1 bg-pink-500 rounded-md font-bold hover:opacity-70'
					onClick={() => setIsVisible()}
				>
					show
				</button>
			)}
		</div>
	);
};

const Instamart = () => {
	const [visibleSection, setIsVisibleSection] = useState('about');
	return (
		<div>
			<h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
			<Section
				title={'About Instamart'}
				description={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
				isVisible={visibleSection === 'about'}
				setIsVisible={() => setIsVisibleSection('about')}
			/>
			<Section
				title={'Instamart Team'}
				description={
					"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s a ed the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum gggggggfgfgfgfgfgfgdgddf."
				}
				isVisible={visibleSection === 'team'}
				setIsVisible={() => setIsVisibleSection('team')}
			/>
			<Section
				title={'Instamart Careers'}
				description={
					"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s a ed the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."
				}
				isVisible={visibleSection === 'careers'}
				setIsVisible={() => setIsVisibleSection('careers')}
			/>
		</div>
	);
};

export default Instamart;

//simple accordian
// const Section = ({ title, description }) => {
// 	const [isVisible, setIsVisible] = useState(false);

// 	return (
// 		<div className='border border-black p-2 m-2'>
// 			<h3 className='font-bold text-xl'>{title}</h3>

// 			{isVisible ? (
// 				<button
// 					className='curser-pointer px-4 py-1 bg-pink-500 rounded-md font-bold hover:opacity-70'
// 					onClick={() => setIsVisible(false)}
// 				>
// 					hide
// 				</button>
// 			) : (
// 				<button
// 					className='curser-pointer px-4 py-1 bg-pink-500 rounded-md font-bold hover:opacity-70'
// 					onClick={() => setIsVisible(true)}
// 				>
// 					show
// 				</button>
// 			)}
// 			{isVisible && <p>{description}</p>}
// 		</div>
// 	);
// };
