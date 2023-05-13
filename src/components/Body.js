// import { restrauntList } from './Config';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
	const [allRestraunts, setAllRestraunts] = useState([]);
	const [filteredRestraunts, setFilteredRestraunts] = useState([]);
	const [searchText, setSearchText] = useState('');
	const { user, setUser } = useContext(UserContext);
	// if (filteredRestraunts?.length === 0)
	// 	return <h1>No Restraunts match your Filter!!</h1>;

	useEffect(() => {
		getRestraunts();
	}, []);
	// console.log('render');

	async function getRestraunts() {
		try {
			const data = await fetch(
				'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2488212&lng=85.79146449999999&page_type=DESKTOP_WEB_LISTING'
			);
			// console.log(data);
			if (!data.ok) {
				throw Error('wrong url');
			}
			const json = await data?.json();
			console.log(json?.data?.cards?.[2]?.data?.data?.cards);
			setAllRestraunts(json?.data?.cards?.[2]?.data?.data?.cards);
			setFilteredRestraunts(json?.data?.cards?.[2]?.data?.data?.cards);

			// setAllRestraunts(json?.data?.cards?.[1]?.data?.data?.cards);
			// setFilteredRestraunts(json?.data?.cards?.[1]?.data?.data?.cards);
			console.log('render');
		} catch (err) {
			console.log(err);
			throw new Error(`something went wrong ${err.message}`);
		}
	}

	const isOnline = useOnline();
	if (!isOnline) {
		return <h1>💥 Offline, please check your internet connection!!</h1>;
	}

	if (!allRestraunts) return null;

	return allRestraunts.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className='search-container p-5 bg-pink-50 my-5'>
				<input
					type='text'
					className='search-input focus:bg-yellow-50 p-2 m-2'
					placeholder='Search'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					autoFocus
				/>
				<button
					className=' p-2 m-2 bg-purple-600 hover:bg-purple-400 text-white rounded-md '
					onClick={() => {
						const data = filterData(searchText, allRestraunts);
						// console.log(data);
						// console.log(searchText);
						setFilteredRestraunts(data);
					}}
				>
					Search
				</button>

				{/* context modification */}
				{/* <input
					value={user.name}
					onChange={(e) =>
						setUser({
							name: e.target.value,
							email: 'newEmail@gmail.com',
						})
					}
				></input> */}
			</div>
			<div className='restraunt-list flex flex-wrap'>
				{filteredRestraunts.map((restraunt) => (
					<Link to={'/restraunt/' + restraunt.data.id} key={restraunt.data.id}>
						<RestrauntCard {...restraunt.data} />
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
