input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        `)
    Tobbie_Walk()
    basic.pause(5000)
    Tobbie_Stop()
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
function Tobbie_Stop () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
input.onSound(DetectedSound.Loud, function () {
    if (TobbieClapWalk == 0) {
        TobbieClapWalk = 1
    } else {
        TobbieClapWalk = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Tobbie_Walk()
})
function Tobbie_Walk () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
let TobbieClapWalk = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
TobbieClapWalk = 0
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showString("" + (input.soundLevel()))
    if (TobbieClapWalk == 1) {
        Tobbie_Walk()
    } else {
        Tobbie_Stop()
    }
})
