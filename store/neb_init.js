import * as NebPay from 'nebpay.js';



if (typeof (webExtensionWallet) == "undefined") {


    if (window.confirm('You dont have the Chrome web wallet extension installed to use this Dapp click Confirm to download now ')) {
        window.location.href = 'https://github.com/ChengOrangeJu/WebExtensionWallet';
    }

} else {
    console.log("It is present");
}

var contractAddress = "n1waoq86MqxQTo9s4LbpND5Tu8fkpEiTfXJ";


var nebPay = new NebPay();

var result = function (data) {
    //alert(JSON.stringify(data));
    dispatch("call");
}



export { contractAddress, nebPay, result };