const main = async () => {
    const NUM2 = await hre.ethers.getContractFactory("NUM2");
    console.log("NUM1 is upgrading...");

    await hre.upgrades.upgradeProxy(
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        NUM2
    );
    console.log("NUM1 upgraded to NUM2");
};

main()
    .then(() => process.exit(1))
    .catch((error) => {
        console.log(error);
        process.exit(0);
    });
