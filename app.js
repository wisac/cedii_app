var btc = document.getElementById("btcPrice");
var eth = document.getElementById("ethPrice");
var dge = document.getElementById("dgePrice");
var usdt = document.getElementById("usdtPrice");

var dollarRate = 12.26;

var livePrice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Ctether%2Cethereum&vs_currencies=usd",

  method: "GET",
  headers: {},
};

$.ajax(livePrice).done(function (response) {
  console.log(response);
});

$.ajax(livePrice).done(function (response) {
  btc.innerHTML = Math.round(response.bitcoin.usd * dollarRate * 100) / 100;
  eth.innerHTML = Math.round(response.ethereum.usd * dollarRate * 100) / 100;
  dge.innerHTML = Math.round(response.dogecoin.usd * dollarRate * 100) / 100;
  usdt.innerHTML = Math.round(response.tether.usd * dollarRate * 100) / 100;
});

$(".searchbtn").click(function () {
  $(this).toggleClass("bg-green");
  $(".fas").toggleClass("color-white");
  $(".input").focus().toggleClass("active-width").val("");
});

//responsiveness

   if (document.getElementById("navbar").style.width < "768px") {
    document.getElementById("toggler").onclick = function () {
      if (document.getElementById("toggler").style.width == "40px") {
        document.getElementById("nav-menu").style.display = "flex";

        document.getElementById("toggler").style.width = "50px";

        // document.getElementById("featured-message").style.top = "500px";

        document.getElementById("nav-cta").style.display = "flex";

        document.getElementById("navbar").style.position = "fixed";
      } else {
        document.getElementById("nav-menu").style.display = "none";

        // document.getElementById("featured-message").style.top = "100px";


        document.getElementById("toggler").style.width = "40px";

        document.getElementById("nav-cta").style.display = "none";

        document.getElementById("navbar").style.position = "fixed";
      }
    };
  }

