pragma solidity ^0.5.0;

contract Decentragram {
  // Will be stored on blockchain because it is a state variable
  // Must tell solidity it is a string since it is a statically typed language
  // Public means we can read this variable outside of this smart contract
  string public name = "Decentragram";


// Store Images

  // Mapping data type works like a database (or hash table)
  // A key value pair. key is the id, value gets stored on blockchain
  // uint = key, a number (unassigned integer, cant be negative)
  // Image = IPFS hash
  mapping(uint => Image) public images;

  // Struct allows you to create your own datatype
  // Like a table in a database, the variables are the columns
  struct Image {
    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }


  // Create Images

  // Tip Images
}
