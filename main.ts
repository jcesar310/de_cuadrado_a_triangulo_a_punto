basic.showString("De Cuadrado a Triangulo y a Punto")
basic.showIcon(IconNames.Square)
basic.pause(3000)
basic.showIcon(IconNames.LeftTriangle)
basic.pause(3000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(3000)
basic.forever(function () {
    basic.showNumber(1)
    basic.pause(2000)
    basic.showString("Cuadrado")
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showNumber(2)
    basic.showString("Triangulo")
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(5000)
    basic.showNumber(3)
    basic.showString("Punto")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(5000)
})
