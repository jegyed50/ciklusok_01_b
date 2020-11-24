input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    felső_vonal()
    jobb_oszlop()
    also_vonal()
    bal_oszlop()
    felkapcsol_villogva(2, 2, 4, 50)
})
function also_vonal () {
    for (let index = 0; index <= 4; index++) {
        felkapcsol_villogva(4 - index, 4, 2, 50)
    }
}
function jobb_oszlop () {
    for (let index2 = 0; index2 <= 4; index2++) {
        felkapcsol_villogva(4, index2, 2, 50)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index <= 24; index++) {
        felkapcsol_villogva(randint(0, 4), randint(0, 4), 4, 50)
    }
})
function bal_oszlop () {
    for (let index3 = 0; index3 <= 4; index3++) {
        felkapcsol_villogva(0, 4 - index3, 2, 50)
    }
}
input.onButtonPressed(Button.B, function () {
    felkapcsol_villogva(2, 2, 2, 200)
    felkapcsol_villogva(0, 0, 2, 200)
    felkapcsol_villogva(4, 0, 2, 200)
    felkapcsol_villogva(4, 4, 2, 200)
    felkapcsol_villogva(0, 4, 2, 200)
})
function felkapcsol_villogva (x: number, y: number, villogás_darab: number, szünet: number) {
    for (let index4 = 0; index4 <= villogás_darab; index4++) {
        led.plot(x, y)
        basic.pause(szünet)
        led.unplot(x, y)
        basic.pause(szünet)
        led.plot(x, y)
    }
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(300)
}
function felső_vonal () {
    for (let index5 = 0; index5 <= 4; index5++) {
        felkapcsol_villogva(index5, 0, 2, 50)
    }
}
