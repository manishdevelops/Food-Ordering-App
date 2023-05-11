import { IMG_CDN_URL } from '../Config';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestrauntCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	lastMileTravelString,
}) => {
	// console.log(name, cuisines, cloudinaryImageId, lastMileTravelString);
	const { user, email } = useContext(UserContext);
	return (
		<div className='w-[200px] p-2 m-2 shadow-lg'>
			<img src={IMG_CDN_URL + cloudinaryImageId} alt='burder' />
			<h2 className='font-bold text-2xl'>{name}</h2>
			<h3>{cuisines.join(', ')}</h3>
			<h4>{lastMileTravelString}</h4>
			{/* <h5 className='font-bold'>{user.name}</h5>
			<h5 className='font-bold'>{user.email}</h5> */}
		</div>
	);
};

export default RestrauntCard;
