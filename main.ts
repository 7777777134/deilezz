input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString("0-10")
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.A, function () {
    ile_1 = randint(1, 17)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.pause(200)
    if (ile_1 == 1) {
        basic.showString("jeff")
    } else if (ile_1 == 2) {
        basic.showString("joueur de flute")
    } else if (ile_1 == 3) {
        basic.showString("vito")
    } else if (ile_1 == 4) {
        basic.showString("craie")
    } else if (ile_1 == 5) {
        basic.showString("gendarme")
    } else if (ile_1 == 6) {
        basic.showString("contable")
    } else if (ile_1 == 7) {
        basic.showString("canibale")
    } else if (ile_1 == 8) {
        basic.showString("robot")
    } else if (ile_1 == 9) {
        basic.showString("garagiste")
    } else if (ile_1 == 10) {
        basic.showString("medecin")
    } else if (ile_1 == 11) {
        basic.showString("aphrodite")
    } else if (ile_1 == 12) {
        basic.showString("peintre")
    } else if (ile_1 == 13) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    } else {
        basic.showString("humains")
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString("1-6")
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    ile_3 = randint(1, 26)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.pause(200)
    if (ile_3 == 1) {
        basic.showString("jeff")
    } else if (ile_3 == 2) {
        basic.showString("joueur de flute")
    } else if (ile_3 == 3) {
        basic.showString("vito")
    } else if (ile_3 == 4) {
        basic.showString("craie")
    } else if (ile_3 == 5) {
        basic.showString("sourd")
    } else if (ile_3 == 6) {
        basic.showString("aveugle")
    } else if (ile_3 == 7) {
        basic.showString("muet")
    } else if (ile_3 == 8) {
        basic.showString("bombe")
    } else if (ile_3 == 9) {
        basic.showString("contable")
    } else if (ile_3 == 10) {
        basic.showString("mort vivaant")
    } else if (ile_3 == 11) {
        basic.showString("peste rose")
    } else if (ile_3 == 12) {
        basic.showString("scar")
    } else if (ile_3 == 13) {
        basic.showString("fantone")
    } else if (ile_3 == 14) {
        basic.showString("cyclope noir")
    } else if (ile_3 == 15) {
        basic.showString("vampire")
    } else if (ile_3 == 16) {
        basic.showString("detective")
    } else if (ile_3 == 17) {
        basic.showString("canibale")
    } else if (ile_3 == 18) {
        basic.showString("celui qui ne faut pas regarder")
    } else if (ile_3 == 19) {
        basic.showString("ceui qui te petrifie")
    } else if (ile_3 == 20) {
        basic.showString("malchanceux")
    } else if (ile_3 == 21) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
    } else {
        basic.showString("humains")
    }
})
input.onButtonPressed(Button.B, function () {
    ile_2 = randint(1, 24)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.pause(200)
    if (ile_2 == 1) {
        basic.showString("jeff")
    } else if (ile_2 == 2) {
        basic.showString("joueur de flute")
    } else if (ile_2 == 3) {
        basic.showString("vito")
    } else if (ile_2 == 4) {
        basic.showString("craie")
    } else if (ile_2 == 5) {
        basic.showString("gendarme")
    } else if (ile_2 == 6) {
        basic.showString("scintifique")
    } else if (ile_2 == 7) {
        basic.showString("medecin")
    } else if (ile_2 == 8) {
        basic.showString("inventeur")
    } else if (ile_2 == 9) {
        basic.showString("ted")
    } else if (ile_2 == 10) {
        basic.showString("sculpteur")
    } else if (ile_2 == 11) {
        basic.showString("robot")
    } else if (ile_2 == 12) {
        basic.showString("magicien")
    } else if (ile_2 == 13) {
        basic.showString("nouveau robot")
    } else if (ile_2 == 14) {
        basic.showString("pretre")
    } else if (ile_2 == 15) {
        basic.showString("peintre")
    } else if (ile_2 == 16) {
        basic.showString("canibale")
    } else if (ile_2 == 17) {
        basic.showString("contable")
    } else if (ile_2 == 18) {
        basic.showString("meterologue")
    } else if (ile_2 == 19) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    } else {
        basic.showString("astronaume")
    }
})
let ile_2 = 0
let ile_3 = 0
let ile_1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . . # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . # # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
})
