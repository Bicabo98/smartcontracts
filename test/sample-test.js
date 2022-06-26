const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dao", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Dao = await hre.ethers.getContractFactory("Dao");
    const dao = await Dao.deploy();
    await dao.deployed();

    expect(await dao.greet()).to.equal("Hello, world!");

    const setGreetingTx = await dao.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await dao.greet()).to.equal("Hola, mundo!");
  });
});
