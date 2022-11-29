import { describe, expect, it } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./SonarSweep";

describe("Day 1: SonarSweep", async () => {
	await itSolvesInput(day);

	const example1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

	describe("solvePart1", () => {
		it("there are 7 measurements that are larger than the previous measurement", () => {
			expect(day.solvePart1(example1)).toEqual(7);
		});
	});

	describe("solvePart2", () => {
		it("there are 5 sums that are larger than the previous sum", () => {
			expect(day.solvePart2(example1)).toEqual(5);
		});
	});

	describe("parsePart1", () => {
		it("extracts numbers", () => {
			expect(day.parsePart1(`199\n200\n208\n`)).toEqual([199, 200, 208]);
		});
	});
});
