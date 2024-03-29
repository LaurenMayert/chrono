import * as chrono from "../../src";
import { testSingleCase } from "../test_util";

test("Test - Single Expression", function () {
    testSingleCase(chrono.es, "lunes 8/2/2016", new Date(2012, 7, 10), (result) => {
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(8);

        expect(result.index).toBe(0);
        expect(result.text).toBe("lunes 8/2/2016");

        expect(result.start).toBeDate(new Date(2016, 2 - 1, 8, 12));
    });

    testSingleCase(chrono.es, "Martes 9/2/2016", new Date(2012, 7, 10), (result) => {
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(9);

        expect(result.index).toBe(0);
        expect(result.text).toBe("Martes 9/2/2016");

        expect(result.start).toBeDate(new Date(2016, 2 - 1, 9, 12));
    });
});
