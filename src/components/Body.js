import { restrauntList } from './Config';
import RestrauntCard from './RestrauntCard';
import { useState } from 'react';

function filterData(searchText, restraunts) {
	console.log(searchText);
	console.log(restraunts);

	const filterData = restraunts.filter((restraunt) => {
		console.log(restraunt.data.name);
		return restraunt.data.name.includes(searchText);
	});
	console.log(filterData);
	return filterData;
}
const Body = () => {
	const [restraunts, setRestraunts] = useState(restrauntList);
	const [searchText, setSearchText] = useState('');

	return (
		<>
			<div className='search-container'>
				<input
					type='text'
					className='search-input'
					placeholder='Search'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					className='search-btn'
					onClick={() => {
						const data = filterData(searchText, restraunts);
						console.log(data);
						console.log(searchText);
						setRestraunts(data);
					}}
				>
					Search
				</button>
			</div>
			<div className='restraunt-list'>
				{restraunts.map((restraunt) => (
					<RestrauntCard {...restraunt.data} key={restraunt.data.id} />
				))}
			</div>
		</>
	);
};

export default Body;
