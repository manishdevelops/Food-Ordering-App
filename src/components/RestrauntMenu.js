import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config.js';
import Shimmer from './Shimmer.js';
import useRestraunt from '../utils/useRestraunt.js';
import { addItem } from '../utils/cartSlice.js';
import { useDispatch } from 'react-redux';

const RestrauntMenu = () => {
	const { id } = useParams();
	const { restraunt, menu } = useRestraunt(id)?.data ?? {};
	console.log(menu);

	// menu?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
	// 	(item) => console.log(item?.card?.info.id)
	// ) ?? '';

	const dispatch = useDispatch();

	const addFoodItem = (item) => {
		dispatch(addItem(item));
	};

	return !restraunt ? (
		<Shimmer />
	) : (
		<div className='menu flex place-content-around'>
			<div>
				<h1 className='font-bold'>Restraunt id: {id}</h1>
				<h2 className='font-bold text-2xl'>{restraunt.name}</h2>
				<img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} />
				<h3 className='font-bold'>{restraunt?.areaName}</h3>
				<h3 className='font-bold'>{restraunt?.city}</h3>
				<h3 className='font-bold'>{restraunt?.avgRating} stars</h3>
				<h3 className='font-bold'>{restraunt?.costForTwo}</h3>
			</div>
			<div></div>
			<div>
				<h1>Menu</h1>
				<ul>
					{menu?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
						(item) => (
							<li className='m-1  font-bold' key={item?.card?.info?.id}>
								{item?.card?.info?.name} -
								<button
									className='px-2 py-1 bg-green-50 rounded-md'
									onClick={() => addFoodItem(item?.card?.info)}
								>
									Add
								</button>
							</li>
						)
					) ?? ''}
				</ul>
			</div>
		</div>
	);
};

export default RestrauntMenu;
