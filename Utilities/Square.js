import { ctx } from "../app.js"

const drawRotatedSquare = (x, y, b ,h, color) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    let xo = x-b
    let yo = y-b
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

export { drawRotatedSquare }