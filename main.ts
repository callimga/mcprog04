input.onGesture(Gesture.ScreenDown, function () {
    Wurf = randint(0, 5)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    Wurf = randint(0, 5)
})
let list: Image[] = []
let Wurf = 0
Wurf = 0
let ms_alt = control.millis()
list[0] = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
list[1] = images.createImage(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `)
list[2] = images.createImage(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . .
    `)
list[3] = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
list[4] = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
list[5] = images.createImage(`
    . . . . .
    . # # # .
    . . . . .
    . # # # .
    . . . . .
    `)
for (let Index = 0; Index <= 5; Index++) {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    list[Index].showImage(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
    if (Wurf > 0) {
        for (let Index2 = 0; Index2 <= 10; Index2++) {
            list[Wurf].showImage(0)
            Wurf = randint(0, 5)
            ms_alt = control.millis()
        }
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
    Wurf = 0
    if (control.millis() - ms_alt > 10000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        ms_alt = control.millis()
    }
})
