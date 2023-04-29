import { restrauntList } from './Config';
import RestrauntCard from './RestrauntCard';

// console.log(restrauntList);
const Body = () => {
	return (
		<div className='restraunt-list'>
			{restrauntList.map((restraunt) => (
				<RestrauntCard {...restraunt.data} key={restraunt.data.id} />
			))}
		</div>
	);
};

export default Body;
