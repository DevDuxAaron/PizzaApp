import { drawCircle } from "./Utilities/Circle.js"
import { drawGroupJam } from "./Components/Jam.js"

const  canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 224
canvas.height = 224
ctx.font = '20px Inconsolata'

let radius = canvas.width/2

let bread1 = "#d8a35f";
let bread2 = "#edd3b2";
let bread3 = "#d29039";

let ketchup = "#d73a33";

let cheese = "#f2b948"

let pineapple = "#f9dea7"
let pineappleLight = "#fcecd2"

const drawPineapple = (x, y, b ,h) => {

}

window.addEventListener('DOMContentLoaded', () =>{
    drawCircle(radius, radius, 112, bread1);
    drawCircle(radius, radius, 109, bread2);
    drawCircle(radius, radius, 106, bread1);
    drawCircle(radius, radius, 104, bread3);

    drawCircle(radius, radius, 100, ketchup);

    drawCircle(radius, radius, 95, cheese);

    drawGroupJam(0)

    // drawPineapple(x, y, b ,h)
})

export { ctx }