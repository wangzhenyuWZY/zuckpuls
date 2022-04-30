import { ethers } from 'ethers'
import { prodAddrs, testAddrs, abi } from '../contracts/abi'

export async function getEther (env = 'prod') {
    let provider
    let myAddr
    let myBalance
    if (window.BinanceChain) {
        provider = new ethers.providers.Web3Provider(window.BinanceChain)
        await window.BinanceChain.enable()
    } else if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum)
        await window.ethereum.enable()
        myAddr = window.ethereum.address
    } else {
        return null
    }
    const signer = provider.getSigner()
    const rpcProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')

    let envAddrs = ''
    let myGasPrice = null
    let network = {
        '56': {
            envAddrs: prodAddrs,
            myGasPrice: ethers.utils.parseUnits('5.001', 9)
        },
        '97': {
            envAddrs: testAddrs,
            myGasPrice: ethers.utils.parseUnits('10.001', 9)
        },
        // '66': {
        //     envAddrs: oktAddrs,
        //     myGasPrice: ethers.utils.parseUnits('5.001', 9)
        // },
        // '65': {
        //     envAddrs: oktTestAddrs,
        //     myGasPrice: ethers.utils.parseUnits('10.001', 9)
        // },
        // '1': {
        //     envAddrs: ethProdAddrs,
        //     myGasPrice: null
        // }
    }
    const chainId = +window.ethereum.chainId || '56'
    envAddrs = network[chainId].envAddrs
    myGasPrice = network[chainId].myGasPrice

    const MyContracts = {
        ido: new ethers.Contract(envAddrs.ido, abi.idoAbi, signer)
    }
    if (!myAddr) myAddr = await signer.getAddress()
    myBalance = await provider.getBalance(myAddr)

    return {
        myBalance,
        myAddr,
        ...ethers,
        provider,
        signer,
        rpcProvider,
        c: MyContracts,
        gasPrice: myGasPrice
    }
}

const MyEthers = {}
MyEthers.install = function (app, options) {
    app.config.globalProperties.getEther = getEther()
}

export default MyEthers
