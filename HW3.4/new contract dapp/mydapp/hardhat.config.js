require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "";
const SEPOLIA_PRIVATE_KEY = "";

//@type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    //  sepolia:{
    //   url: process.env.SEPOLIA_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] :[],
    sepolia: {
          url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
          accounts: [SEPOLIA_PRIVATE_KEY]
        
    },
    localhost: {
      url: "http://127.0.0.1:8545"

    },
    hardhat: {
      // See its defaults 
    }
  }
 
};
