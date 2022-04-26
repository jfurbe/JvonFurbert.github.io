//SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract Users {
  string[] myUsers;
  unit[] userRank;

  function addUser(string memory userName) public {
    myUsers.push(userName);
    userRank.push(0);
  }

  function updateUser(uint userIndex, string memory newUserName) public returns (bool){
    if(myUsers.length > userIndex) {
      myUsers[userIndex] = newUserName;
      return true;
    }
    return false;
  }

  function updateUserRank(uint userIndex, unit memory newUserRank) public returns (bool){
    if(myUsers.length > userIndex) {
      userRank[userIndex] = newUserRank;
      return true;
    }
    return false;
  }

  function deleteUser(uint userIndex) public returns (bool) {
    if(myUsers.length > userIndex){
      for(uint i=userIndex; i<myUsers.length-1;i++){
        myUsers[i] = myUsers[i+1];
        userRank[i] = userRank[i+1];
      }
      myUsers.pop();
      userRank.pop();
      return true;
    }
    return false;
  }

  function getUsers() public view returns (string[] memory) {
    return myUsers;
  }

  function getRanks() public view returns(string[] memory){
    uint[] sorted = sort(userRank)
  }
}