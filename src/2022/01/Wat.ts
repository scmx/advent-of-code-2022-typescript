export const yearDay = "2022/01";

type Input = number[];

export function parsePart1(text: string): Input {
	return text.trim().split("\n").map(Number);
}

export function solvePart1(input: Input) {
	return input;
}

// export function solvePart2(input: Input) {
// 	return solvePart1(input);
// }
