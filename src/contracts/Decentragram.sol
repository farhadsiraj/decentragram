pragma solidity ^0.5.0;

contract Decentragram {
  // Will be stored on blockchain because it is a state variable
  // Must tell solidity it is a string since it is a statically typed language
  // Public means we can read this variable outside of this smart contract
  string public name = "Decentragam";
}
