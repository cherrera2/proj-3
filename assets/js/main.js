'use strict';

var picture = "https://cherrera2.github.io/proj-3/assets/images/Champion.jpg";
var size = 748877; // 748877 bytes or 748.9 kB
var start, end;
var getImg = new Image();

document.getElementById("footer").style.color = "blue";

window.addEventListener('load', (event) => {
  end = new Date().getTime();
  calculateBandwidth();
});

start = new Date().getTime();
getImg.src = picture;

function calculateBandwidth() {
    var accessTime = (end - start) / 1000; // Convert milliseconds to seconds
    var toBits = size * 8;
    var bandwidthSpeed = (toBits / accessTime / 1024 / 1024).toFixed(2);
    console.log("Your bandwidth is: " + bandwidthSpeed);
    // (1024/1024) Convert bps to Mbps
}
