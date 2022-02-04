
async function main() {

  const FakeDaiToken = await hre.ethers.getContractFactory("FakeDAIToken");
  const fakeDaiToken = await FakeDaiToken.deploy("FakeDaiTokenCustom","FDAIC", 18);

  console.log("Address is : ", fakeDaiToken.address);
  
  let txn = await fakeDaiToken.mint("0x057597dFc6F3330CEaEe38c64080E0C9289f81E1",  1000);
  //await txn.wait();

  txn =await fakeDaiToken.name();
  //await txn.wait();

  console.log(txn);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
