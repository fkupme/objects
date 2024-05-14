export const sort = (object, array) => {
	const obj = { ...object };
	const sorted = [];
	const unsorted = [];

	array.forEach(prop => {
		sorted.push({ key: prop, value: object[prop] })
		delete obj[prop]
	});

	for (const key in obj) {
		unsorted.push({ key: key, value: obj[key] });
	};

	unsorted.sort((a, b) => {
		if (a.key[0] > b.key[0]) {
			return 1
		};
		if (a.key[0] < b.key[0]) {
			return -1
		};
		if (a.key[0] === b.key[0]) {
			return 0
		};
	});
	return [...sorted, ...unsorted]
}
