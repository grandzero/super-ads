
async function main() {


  const Test = await hre.ethers.getContractFactory("Test");
  const test = await Test.deploy("0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7");

  const [owner] = await hre.ethers.getSigners();
  //const accounts = await hre.ethers.getSigners();
  console.log("owner address is : ", owner.address);
  await test.deployed();

  let txn = await test.mintSomeToken(owner.address);
  txn?.wait && await txn.wait();

  txn = await test.getBalance(owner.address);
  txn?.wait && await txn.wait();
  console.log("txn completed. Details are : ", txn);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
