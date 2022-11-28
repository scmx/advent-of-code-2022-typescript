import { describe, expect, it } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./Dive";

describe("Day 2: Dive", async function() {
  await itSolvesInput(day);

  const example1: [string, number][] = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ];

  describe("parsePart1", () => {
    it("extracts numbers", () => {
      const input = `forward 8\ndown 8\n`;
      const parsed = [
        ["forward", 8],
        ["down", 8],
      ];
      expect(day.parsePart1(input)).toEqual(parsed);
    });
  });

  describe("solvePart1", () => {
    it("you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150", () => {
      expect(day.solvePart1(example1)).toEqual(150);
    });
  });

  describe("solvePart2", () => {
    it("After following these new instructions, you would have a horizontal position of 15 and a depth of 60. (Multiplying these produces 900", () => {
      expect(day.solvePart2(example1)).toEqual(900);
    });
  });
});
