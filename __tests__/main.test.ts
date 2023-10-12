import { it, describe } from "node:test";
import { strict as assert } from "node:assert";
import functionUnderTest from "../src/main.js";

describe("description", () => {
  it("test", () => {
    const result = functionUnderTest();
    assert.strictEqual(result, null, "functionUnderTest should return null");
  });
});
