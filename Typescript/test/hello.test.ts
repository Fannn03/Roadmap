import { sayHello } from "../src/hello"

describe("Hello", () => {
  test ("Should console hello", () => {
    const name: String = "irfan";

    expect(sayHello(name)).toBe(`hello ${name}`);
  })
})