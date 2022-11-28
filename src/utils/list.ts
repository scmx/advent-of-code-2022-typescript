export function chunkEvery<T>(list: T[], count: number, offset = count): T[][] {
	const results: T[][] = [];
	for (let i = 0; i < list.length; i += offset) {
		results.push(list.slice(i, i + count));
	}
	return results;
}
