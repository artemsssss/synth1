/*
----- Coding Tutorial by Patt Vira ----- 
Name: Pendulum Waves
Video Tutorial: https://youtu.be/rKtLBr3v_0g

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let gravity = 1; let lengthMult = 30000000;
let pendulums = []; let num = 15; let freq0 = 51;
let c = ["#0077b6","#0096c7","#00b4d8","#48cae4"];

let midiNotes = [91, 88, 84, 
                 79, 76, 72, 
                 67, 64, 60, 
                 55, 52, 48, 
                 43, 40, 36];

function setup() {
  createCanvas(600, 400);
  for (let i=0; i<num; i++) {
    let period = 1/(freq0 + i);
    let length = gravity * pow((period / TWO_PI), 2) * lengthMult;
    let s = 5 + (i*1);
    pendulums[i] = new Pendulum(length, c[i % c.length], s, midiNotes[i % midiNotes.length]);
  }
  
}

function draw() {
  background(220);
  translate(width/2, 0);
  for (let i=0; i<num; i++) {
    pendulums[i].update();
    pendulums[i].display();
  }
  
}