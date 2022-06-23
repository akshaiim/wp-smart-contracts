

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log(`contract deployed to ${waveContract.address}`);
    console.log(`Contract deployed by ${owner.address}`);
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    let waveTxn;
    waveTxn = await waveContract.Wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randomPerson).Wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();
}


const runMain = async () => {
    try {
        await main();
        process.exit(0);

    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}

runMain()