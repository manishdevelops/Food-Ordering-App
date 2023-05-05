import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config.js';
import Shimmer from './Shimmer.js';

const RestrauntMenu = () => {
	const { id } = useParams();
	console.log(id);
	const [restraunt, setRestraunt] = useState(null);
	useEffect(() => {
		getRestrauntInfo();
	}, []);

	async function getRestrauntInfo() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/menu/v4/full?lat=20.2488212&lng=85.79146449999999&menuId=' +
				id
		);
		const json = await data.json();
		console.log(json);
		setRestraunt(json.data);
	}

	return !restraunt ? (
		<Shimmer />
	) : (
		<div className='menu'>
			<div>
				<h1>Restraunt id: {resId}</h1>
				<h2>{restraunt.name}</h2>
				<img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} />
				<h3>{restraunt?.area}</h3>
				<h3>{restraunt?.city}</h3>
				<h3>{restraunt?.avgRating} stars</h3>
				<h3>{restraunt?.costForTwoMsg}</h3>
			</div>
			<div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restraunt?.menu?.items).map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestrauntMenu;
