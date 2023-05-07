export function filterData(searchText, restraunts) {
	const filterData = restraunts.filter((restraunt) => {
		return restraunt?.data?.name
			?.toLowerCase()
			.includes(searchText.toLowerCase());
	});
	// console.log(filterData);
	return filterData;
}
