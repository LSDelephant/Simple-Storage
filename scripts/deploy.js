async function main() {
  const Storage = await ethers.getContractFactory("SimpleStorage");
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log("📦 SimpleStorage deployed to:", storage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
