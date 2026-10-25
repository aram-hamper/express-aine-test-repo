const assert = require("node:assert");

describe("express exports", () => {
  it("should export Router as a function", () => {
    assert.strictEqual(typeof require("..").Router, "function");
  });
});
