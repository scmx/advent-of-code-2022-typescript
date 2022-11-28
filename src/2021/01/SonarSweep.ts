import { chunkEvery } from "../../utils/list";

export const yearDay = "2021/01";

export function parsePart1(text: string) {
	return text.trim().split("\n").map(Number);
}

type Input = number[];

export function solvePart1(input: Input) {
	const pairs = chunkEvery(input, 2, 1);
	return pairs.filter(([a, b]) => a < b).length;
}

export function solvePart2(input: Input) {
	const triplets = chunkEvery(input, 3, 1);
	const sums = triplets.map(sumNumbers);
	return solvePart1(sums);
}

function sumNumbers(list: number[]): number {
	return list.reduce((a, b) => a + b, 0);
}
