input.onButtonPressed(Button.A, function () {
    if (getal > 0) {
        getal += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        getal += 1
    }
})
let getal = 0
basic.showNumber(0)
basic.forever(function () {
    basic.showNumber(getal)
})
