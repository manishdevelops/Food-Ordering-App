import { useState, useEffect } from 'react';

const useOnline = () => {
	const [isOnline, setOnline] = useState(true);
	useEffect(() => {
		window.addEventListener('online', () => {
			setOnline(true);
		});
		window.addEventListener('offline', () => {
			setOnline(false);
		});
	}, []);

	return isOnline;
};

export default useOnline;
