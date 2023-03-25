
var btc = document.getElementById("btcPrice");
var eth = document.getElementById("ethPrice");
var dge = document.getElementById("dgePrice");
var usdt = document.getElementById("usdtPrice");

var dollarRate = 12.26;

var livePrice = 
{
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Ctether%2Cethereum&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(livePrice).done(function (response)
{
     console.log(response);
});



$.ajax(livePrice).done(function (response)
{
     btc.innerHTML = Math.round((response.bitcoin.usd * dollarRate) * 100) / 100;
     eth.innerHTML = Math.round((response.ethereum.usd * dollarRate) * 100) / 100;
     dge.innerHTML = Math.round((response.dogecoin.usd * dollarRate) * 100) / 100;
     usdt.innerHTML = Math.round((response.tether.usd * dollarRate) * 100) / 100;
});