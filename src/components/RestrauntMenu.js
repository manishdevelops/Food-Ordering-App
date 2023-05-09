import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config.js';
import Shimmer from './Shimmer.js';
import useRestraunt from '../utils/useRestraunt.js';
const RestrauntMenu = () => {
	const { id } = useParams();
	const restraunt = useRestraunt(id);

	return !restraunt ? (
		<Shimmer />
	) : (
		<div className='menu'>
			<div>
				<h1>Restraunt id: {id}</h1>
				<h2>{restraunt.name}</h2>
				<img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} />
				<h3>{restraunt?.areaName}</h3>
				<h3>{restraunt?.city}</h3>
				<h3>{restraunt?.avgRating} stars</h3>
				<h3>{restraunt?.costForTwo}</h3>
			</div>
			{/* <div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restraunt?.menu?.items).map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div> */}
		</div>
	);
};

export default RestrauntMenu;
