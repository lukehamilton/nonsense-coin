import { observable } from 'mobx'
import Web3 from 'web3'

class Store {
  @observable web3Instance
  @observable provider

  constructor (props) {
    console.log('Store constructor');
    this.getWeb3().then( (results) => {
      console.log('results', results);
    }).catch( (e) => {
      console.log('Error getting Web 3');
    })
  }

  getWeb3() {
    return new Promise( (resolve, reject) => {
      window.addEventListener('load', () => {
        console.log('loaded!');
        var web3 = window.web3
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
          // Use Mist/MetaMask's provider.
          web3 = new Web3(web3.currentProvider)
          this.web3Instance = new Web3(web3.currentProvider)
          this.provider = 'injected'
          resolve()
        } else {
          // Fallback to localhost if no web3 injection.
          var provider = new Web3.providers.HttpProvider('http://localhost:8545')
          web3 = new Web3(provider)
          'localhost'
          let results = {
            web3Instance: web3,
            provider: 'localhost'
          }

        }
        this.web3Instance = new Web3(web3.currentProvider)
        this.provider = provider
        resolve()
      })
    })
  }

}

export default Store
