// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;


contract OrdersContract{

    uint public orderCounters = 0;

    constructor() {
        createOrder("BTC", "Take profit", 38, 8, 3);
    }

    struct Orders {
        uint id;
        string stock;
        string state;
        uint256 percentage;
        uint256 margin;
        uint256 pnlUsdt;
        uint256 createdAt;
    }

    mapping (uint256 => Orders) public orders;


    function createOrder(string memory _stock, string memory _state, uint256  _percentage, uint256 _margin, uint256 _pnlUsdt) public {
        orderCounters++;
        orders[orderCounters] = Orders(orderCounters, _stock, _state, _percentage,_margin, _pnlUsdt, block.timestamp);
        
    }
}
