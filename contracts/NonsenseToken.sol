
pragma solidity ^0.4.2;

/**
 * ERC 20 Token
 * Spec: https://github.com/ethereum/EIPs/issues/20
 */

contract ERC20 {

  // @return the total amount of tokens
  function totalSupply() constant returns (uint256 supply) {}

  // @param _owner The address of the balance to be retrieved
  // @return The balance of that address
  function balanceOf(address _owner) constant returns (uint256 balance) {}

  // @notice send '_value' tokens to '_to' address from 'msg.sender' address
  // @param _to The address to send the tokens to
  // @param _value The amount of tokens to transfer (this is in wei ?)
  // @return ture / false if the transfer was successful or not
  function transfer(address _to, uint256 _value) returns (bool success) {}

  // @notice send '_value' tokens to '_to' address from '_from' address
  //         on the condition it is approved by the '_from' address
  // @param _from The address sending the tokens
  // @param _to The address receiving the tokens
  // @param _value The amount of tokens to transfer (this is in wei ?)
  // @return ture / false if the transfer was successful or not
  function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {}

  // @notice 'msg.sender' address approved '_spender' address to spend '_value' amount of tokens
  // @param _spender The address of the account to approve to transfer the tokens
  // @param _value The amount of wei to be approved to transfer (is this in wei or # of tokens?)
  // @return ture / false if the transfer was successful or not
  function approve(address _spender, uint256 _value) returns (bool success) {}

  // @param _owner The address of the account that owns the tokens
  // @param _spender The address of the account allowed to transfer the tokens
  /// @return Amount of remaining tokens allowed to spent
  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {}

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

}
