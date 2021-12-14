import { ctx } from "../app.js"

const drawRotatedTriangle = (x, y, b ,h) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    xo = x-b
    yo = y-b
    ctx.lineTo(xo, yo);
    xo = xo+h
    yo = yo-h
    ctx.lineTo(xo, yo);
    xo = xo+b
    yo = yo+b
    ctx.lineTo(xo, yo);
    xo = xo-h
    yo = yo+h
    ctx.lineTo(xo, yo);
    ctx.fill();
    ctx.closePath();
}