
pragma solidity ^0.4.11;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract NonsenseToken is MintableToken {
  string public name = "Nonsense Token";
  string public symbol = "NSENSE";
  uint256 public decimals = 18;
}
