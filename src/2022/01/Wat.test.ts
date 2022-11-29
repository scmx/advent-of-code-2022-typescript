import { describe, expect, it } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./Wat";

describe("Day 1: Wat", async function() {
	await itSolvesInput(day);

	const example1 = [123];

	describe("parsePart1", () => {
		it("extracts numbers", () => {
			const input = `199\n200\n208\n`;
			const parsed = [199, 200, 208];
			expect(day.parsePart1(input)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		it("", () => {
			expect(day.solvePart1(example1)).toEqual(example1);
		});
	});

	// describe("solvePart2", () => {
	//	 it("", () => {
	//		 expect(day.solvePart2(example1)).toEqual(5);
	//	 });
	// });
});
