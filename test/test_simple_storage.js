const { expect } = require("chai");

describe("SimpleStorage", function () {
  it("зберігає та читає число", async function () {
    const Storage = await ethers.getContractFactory("SimpleStorage");
    const storage = await Storage.deploy();
    await storage.deployed();

    await storage.setNumber(42);
    expect(await storage.getNumber()).to.equal(42);
  });
});
