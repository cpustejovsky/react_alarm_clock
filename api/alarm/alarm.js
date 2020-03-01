const spawn = require("child_process").spawn;
const moment = require("moment");
const fs = require("fs");
const Randomizer = require("./randomizer");
const brownNoise = "mp3/brown-noise.mp3";
console.clear();
const data = fs.readdirSync("./mp3/alarms");
let alarmMp3s = Randomizer.randomizeArr(data).map(item => `mp3/alarms/${item}`);

let sleep = true;
const playFuzzyNoise = () => {
  fuzzyNoise = spawn("mplayer", ["-slave", brownNoise]);
  fuzzyNoise.stdout.on("data", function(data) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("fuzzyNoise stdout: " + data);
  });
  fuzzyNoise.stderr.on("data", function(data) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("fuzzyNoise stderr: " + data);
  });
  fuzzyNoise.on("exit", function() {
    console.log("fuzzy noise exited.");
  });
};

function checkTime(hour, minute, meridiem) {
  if (sleep) {
    let now = moment();
    if (
      Number(now.format("hh")) === Number(hour) &&
      Number(now.format("mm")) === Number(minute) &&
      now.format("A") === meridiem
    ) {
      wakeUp(alarmMp3s);
    } else {
      setTimeout(function() {
        checkTime(hour, minute, meridiem);
      }, 1000);
    }
  }
}
function wakeUp(mp3Arr) {
  console.log("fuzzy noise should exit");
  fuzzyNoise.kill();
  sleep = false;
  console.log("wake up!");

  alarmClock = spawn("mplayer", ["-slave", alarmMp3s[0]]);
  alarmClock.stdout.on("data", function(data) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Alarm clock stdout: " + data);
  });
  alarmClock.stderr.on("data", function(data) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Alarm clock stderr: " + data);
  });
  alarmClock.on("exit", function() {
    console.log("Bubye!");
  });
}

module.exports = function(hour, minute, meridiem) {
  playFuzzyNoise();
  console.log(
    `\n Setting alarm for ${hour}:${minute} ${meridiem} \n`
  );
  checkTime(hour, minute, meridiem);
}