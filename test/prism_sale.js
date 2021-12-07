const PrismSale = artifacts.require("PrismSale");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("PrismSale", function (accounts) {
  it("should assert true", async function () {
    await PrismSale.deployed();
    return assert.isTrue(true);
  });

  it("should get the right accounts", async function() {
    const contract = await PrismSale.deployed()

    const owner = await contract.owner.call()
    const charity = await contract.charity.call();

    assert.isTrue(owner == 0xc3fbae5bd43771108e09ad738ef55699f7270f96);
    assert.isTrue(charity == 0x6cc8f3bcae5f0d73620b4f6a207d548e3280c904);

  })
});
