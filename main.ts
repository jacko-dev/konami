function xypos (x: number, y: number, image: Image) {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    basic.showNumber(x, y)
}
let y = 0
let x = 0
basic.forever(function () {
    let image: Image = null
    xypos(x, y, image)
})
