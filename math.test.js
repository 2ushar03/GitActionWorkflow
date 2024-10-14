const { add, subtract, divide, multiply, percentage } = require("./math");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(4, 4)).toBe(9);
  });
  it("Should test subtract", () => {
    expect(subtract(4,2)).toBe(2);
  });
  it("Should test divide", () => {
    expect(divide(20,2)).toBe(10);
  });
  it("Should test multiply", () => {
    expect(multiply(30,2)).toBe(60);
  });
  it("Should test percentage",()=>{
    expect(percentage(4,1)).toBe(80);
  });
});
