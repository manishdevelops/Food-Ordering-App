import { IMG_CDN_URL } from '../Config';

const RestrauntCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	lastMileTravelString,
}) => {
	// console.log(name, cuisines, cloudinaryImageId, lastMileTravelString);
	return (
		<div className='w-[200px] p-2 m-2 shadow-lg'>
			<img src={IMG_CDN_URL + cloudinaryImageId} alt='burder' />
			<h2 className='font-bold text-2xl'>{name}</h2>
			<h3>{cuisines.join(', ')}</h3>
			<h4>{lastMileTravelString} minutes</h4>
		</div>
	);
};

export default RestrauntCard;
