export const solidity = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public data;

    constructor() {
        data = 0;
    }

    function setData(uint256 _value) public {
        data = _value;
    }

    function getData() public view returns (uint256) {
        return data;
    }
}
`

export const abi = `[
  {
    "constant": true,
    "inputs": [],
    "name": "getData",
    "outputs": [{"type": "uint256"}]
  },
  {
    "constant": false,
    "inputs": [{"type": "uint256", "name": "_value"}],
    "name": "setData",
    "outputs": []
  }
]
`