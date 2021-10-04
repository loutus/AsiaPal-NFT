async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Owner address:", deployer.address);
  
    const AsiaPalNFT = await ethers.getContractFactory("AsiaPalNFT");
    const NFT = await AsiaPalNFT.deploy();
  
    console.log("AsiaPalNFT address:", NFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });