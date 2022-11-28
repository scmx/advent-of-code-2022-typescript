export const yearDay = "2021/02";

type Input = [string, number][];

export function parsePart1(text: string): Input {
	return text
		.trim()
		.split("\n")
		.map((line) => line.split(" "))
		.map(([direction, steps]) => [direction, Number(steps)]);
}

export function solvePart1(input: Input) {
	let { pos, depth } = { pos: 0, depth: 0 };
	for (const [direction, steps] of input) {
		if (direction === "forward") pos += steps;
		else if (direction === "up") depth -= steps;
		else if (direction === "down") depth += steps;
	}
	return pos * depth;
}

export function solvePart2(input: Input) {
	let { pos, depth, aim } = { pos: 0, depth: 0, aim: 0 };
	for (const [direction, steps] of input) {
		if (direction === "down") aim += steps;
		else if (direction === "up") aim -= steps;
		else if (direction === "forward") {
			pos += steps;
			depth += steps * aim;
		}
	}
	return pos * depth;
}
