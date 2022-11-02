const main = async () => {
    const NUM1 = await hre.ethers.getContractFactory("NUM1");
    console.log("Deploying NUM1 version 1");
    const num1 = await hre.upgrades.deployProxy(NUM1, [10], {
        initializer: "update",
    });
    await num1.deployed();
    console.log("NUM1 deployed address:", num1.address);
};
// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

main()
    .then(() => process.exit(1))
    .catch((error) => {
        console.log(error);
        process.exit(0);
    });
