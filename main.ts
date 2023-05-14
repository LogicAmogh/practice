input.onSound(DetectedSound.Loud, function () {
    Flag = !(Flag)
    if (Flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
let Flag = false
Flag = true
