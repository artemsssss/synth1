// let keysCodes1 = [90,88,67,86,66,78,77]; //zxcvbnm
// let keysCodes2 = [65,83,68,70,71,72,74]; //asdfghj
// let keysCodes3 = [81,87,69,82,84,89,85]; //qwertyu

// let notes = [0,2,3,5,7,8,11,12]; // scale (гамма)
// let note;
// let ix = 0;
// let circles = [];
 

let gravity = 3; let lengthMult = 30000000;
let pendulums = []; 
let num = 4; 
let freq0 = 51;
let c = ["#0077b6","#0096c7","#00b4d8","#48cae4"];

let midiNotes = [91, 88, 84, 
                 79, 76, 72, 
                 67, 64, 60, 
                 55, 52, 48, 
                 43, 40, 36];

function setup() {
  createCanvas(windowWidth, windowHeight);
//   if(device) {
  for (let i=0; i<num; i++) {
    let period = 1/(freq0 + i);
    let length = gravity * pow((period / TWO_PI), 2) * lengthMult;
    let s = 5 + (i*1);
    pendulums[i] = new Pendulum(length, c[i % c.length], s, midiNotes[i % midiNotes.length]);
//   }
}
  
}

function draw() {
  background(0);
  translate(width/2, 0);
//   if(device) {
    for (let i=0; i<num; i++) {
        pendulums[i].update();
        pendulums[i].display();
    //   }
  }

  
}

// function keyPressed() {
//     if(device) {
//         context.resume();
//         if(keyIsPressed === true) {

//             let c = new Circle()
//             circles.push(c);
//             ix++;

//             if(keysCodes1.includes(keyCode)) {
//               ix = keysCodes1.indexOf(keyCode);
//               note = notes[ix]+36;
//               noteOn(device,context,note,random(50,100))

//             }
//             if(keysCodes2.includes(keyCode)) {
//               ix = keysCodes2.indexOf(keyCode);
//               note = notes[ix]+48;
//               noteOn(device,context,note,random(50,100))
//             }
//             if(keysCodes3.includes(keyCode)) {
//               ix = keysCodes3.indexOf(keyCode);
//               note = notes[ix]+60;
//               noteOn(device,context,note,random(50,100))
//             }
//         }

//     }   
// }

// function keyReleased() {
//     if(device) {
//         noteOff(device,context,note);
//     }
// }

// class Circle {
//     constructor() {
//         this.x = random(0,windowWidth);
//         this.y = random(0,windowHeight);
//         this.d = random(100);
//         this.r = 255;
//         this.g = 255;
//         this.b = 255;
//         this.a = 1;
//     }

//     show() {
//         fill(this.r,this.g,this.b,this.a);
//         noStroke();
//         circle(this.x,this.y,this.d);
//     }

//     update() {
//         this.a -= 0.05;
//         this.x += random(100) - 50; 
//         this.y += random(100) - 50;
//     }

//     joinCircles(circles) {
//         circles.forEach(e =>{
//             stroke(30);
//             line(this.x,this.y,e.x,e.y);

//         });
//       }

// }



