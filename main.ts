function Tobbie_Stop () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
input.onSound(DetectedSound.Loud, function () {
    TobbieClapWalk += 1
    if (TobbieClapWalk == 1) {
        Tobbie_Walk()
        control.waitMicros(5000000)
        Tobbie_Stop()
    }
})
function Tobbie_Walk () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
let TobbieClapWalk = 0
TobbieClapWalk = 0
basic.forever(function () {
    basic.showNumber(TobbieClapWalk)
})
