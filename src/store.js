import { observable }          from 'mobx'
import Web3                    from 'web3'
import { default as truffleContract } from 'truffle-contract'

// Contracts
import artifacts from '../build/contracts/NonsenseTokenCrowdsale.json'

class Store {
  @observable web3
  @observable web3Provider

  constructor (props) {
    this.getWeb3().then( (results) => {
      this.web3 = results.web3Instance
      this.web3Provider = results.web3Provider
      this.contract = truffleContract(artifacts)
      this.contract.setProvider(this.web3.currentProvider)
      this.contract.deployed().then( (crowdsale) => {
        console.log('crowdsale', crowdsale);
      })

      // this.artifacts = artifacts

    }).catch( (e) => {
      console.log('Error getting Web 3');
    })
  }

  getWeb3() {
    return new Promise( (resolve, reject) => {
      window.addEventListener('load', () => {
        var web3 = window.web3
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
          // Use Mist/MetaMask's provider.
          let web3Instance = new Web3(web3.currentProvider)
          var results = { web3Instance: web3Instance, web3Provider: 'injected' }
        } else {
          // Fallback to localhost if no web3 injection.
          var provider = new Web3.providers.HttpProvider('http://localhost:8545')
          web3 = new Web3(provider)
          var results = { web3Instance: web3, web3Provider: 'localhost' }
        }
        resolve(results)
      })
    })
  }

}

export default Store
