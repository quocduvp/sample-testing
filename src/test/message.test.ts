import { sayHello } from "../functions/hello";

describe("#sayHello(name)", () => {
  let name: string;
  beforeAll(() => {
    name = "Dus";
  });

  beforeAll(() => {});

  test("Message to equal `Hi, Du!`", async () => {
    expect(sayHello(name)).toEqual(`Hi, ${name}!`);
  });

  test("Message to contain `Du`", async () => {
    expect(sayHello(name)).toContain(name);
  });

  test("Message to be string", async () => {
    expect(sayHello(name)).not.toBeUndefined();
  });
});
