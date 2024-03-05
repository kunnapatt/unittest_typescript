import { merge } from "../src/sort" ;

describe("Merge sort", () => {
    it("Should merge data collection correctly", () => {
        expect(merge(
            [4, 3, 2, 1], 
            [10, 11, 12, 13], 
            [20, 15, 10, 5],
        )).toEqual([1, 2, 3, 4, 13, 12, 11, 10, 5, 10, 15, 20])
    });

    it("Should merge data collection correctly 2", () => {
        expect(merge(
            [4, 3, 2, 1], 
            [20, 12, 13, 15], 
            [9, 8, 7, 6],
        )).toEqual([1, 2, 3, 4, 20, 15, 13, 12, 6, 7, 8, 9])
    });

}) ;