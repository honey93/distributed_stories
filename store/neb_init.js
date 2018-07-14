import * as NebPay from 'nebpay.js';


var HttpRequest = require("nebulas").HttpRequest;
        var Neb = require("nebulas").Neb;
        var Account = require("nebulas").Account;
        var Transaction = require("nebulas").Transaction;
        var Unit = require("nebulas").Unit;
        var NVM = require("nebulas").NVM;
        var neb = new Neb();






var contractAddress = "n1pQHv3oR8x7cjSZUjjGiQq1wCeQWWrhPm1";


var nebPay = new NebPay();

var result = function () {
    //resolve();
    //alert(JSON.stringify(data));
   // dispatch("call");
}



export { contractAddress, nebPay, result,NebPay };