import { drawRotatedSquare } from "../Utilities/Square.js"

let jam = "#ecac9b"
let jamBorder = "#e17763"
let ctx 

const drawJam = (x, y, b ,h) => {
    let border = 2
    drawRotatedSquare(x, y, b ,h, jamBorder)
    drawRotatedSquare(x, y-border, b-border ,h-border, jam)

}

const drawGroupJam = (level) => {
    if (level === 0) {
        drawJam(112, 50, 20, 10)
        drawJam(60, 70, 10, 20)
        drawJam(100, 110, 20, 10)
        drawJam(50, 120, 20, 10)
        drawJam(160, 80, 10, 20)
        drawJam(150, 120, 20, 10)
        drawJam(100, 160, 10, 20)
        drawJam(180, 140, 10, 20)
        drawJam(160, 180, 20, 10)
        drawJam(110, 200, 10, 20)
        drawJam(70, 180, 20, 10)
        drawJam(70, 140, 10, 20)
        drawJam(120, 80, 10, 20)
    }
}

export { drawGroupJam }