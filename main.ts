let x = 0
let y = 0
function xypos (x: number, y: number, image: Image) {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
}
basic.forever(function () {
    let image: Image = null
    xypos(x, y, image)
})
