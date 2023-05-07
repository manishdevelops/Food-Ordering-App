import { useState, useEffect } from 'react';

const useRestraunt = (resId) => {
	const [restraunt, setRestraunt] = useState(null);

	useEffect(() => {
		getRestrauntInfo();
	}, []);

	async function getRestrauntInfo() {
		const data = await fetch(
			`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2488212&lng=85.79146449999999&restaurantId=${resId}&submitAction=ENTER`
		);
		const json = await data.json();
		// console.log(json);
		console.log(json.data.cards);
		setRestraunt(json?.data?.cards[0]?.card?.card?.info);
	}

	return restraunt;
};

export default useRestraunt;
