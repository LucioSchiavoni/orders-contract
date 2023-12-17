// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;


contract OrdersContract{

    uint public orderCounters = 0;


    struct Orders {
        uint id;
        string stock;
        string state;
        uint256 percentage;
        uint256 createdAt;
    }

    mapping (uint256 => Orders) public orders;


    function createOrder(string memory _stock, string memory _state, uint256  _percentage) public {
        orders[1] = Orders(orderCounters, _stock, _state, _percentage, block.timestamp);
        orderCounters++;

    }
}