// Built-in Node test runner (node --test): no test library needed.
const test = require("node:test");
const assert = require("node:assert");
const { server } = require("./index");

test("server module exports a server", () => {
  assert.ok(server);
});
