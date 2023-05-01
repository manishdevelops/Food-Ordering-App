// import { restrauntList } from './Config';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer.js';

function filterData(searchText, restraunts) {
	const filterData = restraunts.filter((restraunt) => {
		return restraunt.data.name.includes(searchText);
	});
	// console.log(filterData);
	return filterData;
}
const Body = () => {
	const [allRestraunts, setAllRestraunts] = useState([]);
	const [filteredRestraunts, setFilteredRestraunts] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		getRestraunts();
	}, []);
	console.log('render');

	async function getRestraunts() {
		try {
			const data = await fetch(
				'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
			);
			console.log(data);
			if (!data.ok) {
				throw Error('wrong url');
			}
			const json = await data.json();
			console.log(json);
			setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
			setFilteredRestraunts(json?.data?.cards[2].data?.data?.cards);
			// console.log('render');
		} catch (err) {
			console.log(err);
			throw new Error(`something went wrong ${err.message}`);
		}
	}
	return allRestraunts.length === 0 ? (
		<Shimmer />
	) : (
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
						const data = filterData(searchText, allRestraunts);
						// console.log(data);
						// console.log(searchText);
						setFilteredRestraunts(data);
					}}
				>
					Search
				</button>
			</div>
			<div className='restraunt-list'>
				{filteredRestraunts.map((restraunt) => (
					<RestrauntCard {...restraunt.data} key={restraunt.data.id} />
				))}
			</div>
		</>
	);
};

export default Body;
