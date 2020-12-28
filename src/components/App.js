import React, { Component } from 'react';
import Web3 from 'web3';
import Identicon from 'identicon.js';
import './App.css';
import Decentragram from '../abis/Decentragram.json';
import Navbar from './Navbar';
import Main from './Main';

// Web3 is the main JS library for interacting with Ethereum
// Turns our clientside app into a blockchain app
// Metamask turns our browser into a blockchain browser

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // Boilerplate code. Checks to see if browser has access to Ethereum.
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying Metamask!'
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    // Fetch account from Metamask
    const accounts = await web3.eth.getAccounts();
    // Set the current account from MetaMask on state
    this.setState({ account: accounts[0] });

    // Get Network ID (Ganache in this case @ 5777)
    const networkId = await web3.eth.net.getId();
    const networkData = Decentragram.networks[networkId];

    if (networkData) {
      // Create a JS version of the contract with web3
      // Allows us to call the functions inside the contract
      const decentragram = web3.eth.Contract(
        Decentragram.abi,
        networkData.address
      );
    } else {
      window.alert('Decentragram contract not deployed to detected network.');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading ? (
          <div id="loader" className="text-center mt-5">
            <p>Loading...</p>
          </div>
        ) : (
          <Main
          // Code...
          />
        )}
        }
      </div>
    );
  }
}

export default App;
