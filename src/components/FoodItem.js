import { IMG_CDN_URL } from '../Config.js';

const FoodItem = ({ name, imageId, id, price }) => {
	console.log(name, imageId, id, price);
	return (
		<div className=' p-2 m-4 shadow-lg'>
			<img className='h-24' src={IMG_CDN_URL + imageId} />
			<h2 className='font-normal  text-2xl'>{name}</h2>
			<h3>price: {price / 100}</h3>
		</div>
	);
};

export default FoodItem;
