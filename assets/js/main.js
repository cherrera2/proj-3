'use strict';

var picture = "https://cherrera2.github.io/proj-3/assets/images/Champion.jpg";
var size = 748877; // 748877 bytes or 748.9 kB
var start, end;
var getImg = new Image();

// Detects how long it takes for the image to load
function getEnd() {
  end = new Date().getTime();
  calculateBandwidth();
}

// Triggers when page fully loads
window.addEventListener('load', getEnd);

// Start time when image initally loads
start = new Date().getTime();
getImg.src = picture;

// Use start and end time to calculate bandwidth needed for track file selection
function calculateBandwidth() {
  var accessTime = (end - start) / 1000; // Convert milliseconds to seconds
  var toBits = size * 8;
  var bandwidthSpeed = (toBits / accessTime / 1024 / 1024).toFixed(2);
  console.log("Your bandwidth is: " + bandwidthSpeed);
  // (1024/1024) Convert bps to Mbps

  selectFiles(bandwidthSpeed);
}

// Change the files to certain bitrate based on user bandwidth
function selectFiles(speed) {
  var t1 = document.getElementById('c-t1');
  var t2 = document.getElementById('c-t2');
  var t3 = document.getElementById('c-t3');
  var t4 = document.getElementById('c-t4');
  var player = document.querySelectorAll("audio"); // Array of audio players

  if(speed > 20) {
    t1.src = "assets/music/Keep_it_Moving-320.mp3";
    t2.src = "assets/music/Wisdom_and_Happiness-320.mp3";
    t3.src = "assets/music/In_My_Lifetime-320.mp3";
    t4.src = "assets/music/Fearless-320.mp3";

    console.log("Selected music at: 320Kbps");

  } else if (speed <= 20 && speed >= 5) {
    t1.src = "assets/music/Keep_it_Moving-192.mp3";
    t2.src = "assets/music/Wisdom_and_Happiness-192.mp3";
    t3.src = "assets/music/In_My_Lifetime-192.mp3";
    t4.src = "assets/music/Fearless-192.mp3";

    console.log("Selected music at: 192Kbps");

  } else if (speed < 5) {
    t1.src = "assets/music/Keep_it_Moving-128.mp3";
    t2.src = "assets/music/Wisdom_and_Happiness-128.mp3";
    t3.src = "assets/music/In_My_Lifetime-128.mp3";
    t4.src = "assets/music/Fearless-128.mp3";

    console.log("Selected music at: 128Kbps");
  }

  console.log(document.querySelectorAll("audio"));

  // Load the audio players that are in the querySelectorAll array
  function loadTracks(item) {
    item.load();
  }

  // Load each audio player
  player.forEach(loadTracks);

}
