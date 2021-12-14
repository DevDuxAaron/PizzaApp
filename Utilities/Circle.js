import { ctx } from "../app.js"

const drawCircle = (x, y, radius, color) => {
    ctx.beginPath();
    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.closePath()
}

export { drawCircle }