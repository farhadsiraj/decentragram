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
  uint public imageCount = 0;
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

  // Creates an event, gives us access to emit this info everytime something is added to the blockchain
  event ImageCreated(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );


  // Create Images

  // Adding first image to mapping and using Image struct to build the first image
  function uploadImage(string memory _imgHash, string memory _description) public {
    // If this require returns false, the rest of the function will NOT run
    // Making sure _description is not empty, convert string to bytes to test length
    require(bytes(_description).length > 0);

    require (bytes(_imgHash).length > 0);

    // Make sure the uploader address exisits
    require(msg.sender != address(0x0));

    // Increment image count
    imageCount ++;

    // Add image to contract
    // msg is a global solidity variable that comes in with each transaction.
    // msg.sender = ethereum address
    images[imageCount] = Image(imageCount, _imgHash, _description, 0, msg.sender);

    // Trigger an event
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }

  // Tip Images
  // NOTE: You must use public payable when you want to send cryptocurrency with a function
  // memory = stored in function call
  // storage = on blockchain
  function tipImageOwner(uint _id) public payable {
    // Fetch the image - we're calling the Struct data type we made
    Image memory _image = images[_id];

    // Fetch the author
    address payable _author = _image.author;

    // Send ETH to the author
    // .transfer is a special Solidity function
    // msg.value = amount of eth sent when function is called
    address(_author).transfer(msg.value);
  }
}
