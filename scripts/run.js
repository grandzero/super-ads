
async function main() {

  const StreamerC = await hre.ethers.getContractFactory("StreamingToken");
  const streamerC = await StreamerC.deploy("CafeVillage","CAFEV","0xEB796bdb90fFA0f28255275e16936D25d3418603","0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873", "0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7");

  await streamerC.deployed();

  let txn = await streamerC.issueNFT("0x057597dFc6F3330CEaEe38c64080E0C9289f81E1", 100);
  txn?.wait && await txn.wait();
  
  // txn = await greeter.getFirstDigit(2);
  //  await txn?.wait();
  // console.log("txn is : ", txn);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
