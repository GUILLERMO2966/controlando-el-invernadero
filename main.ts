basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showString("MENOS TEMPERATURA")
        music.playTone(147, music.beat(BeatFraction.Breve))
    }
    while (input.temperature() > 30) {
        basic.showString("MAS TEMPERATURA")
        music.playTone(523, music.beat(BeatFraction.Breve))
    }
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    while (pins.digitalReadPin(DigitalPin.P1) < 200) {
        basic.showString("MENOS HUMEDAD")
        music.playTone(139, music.beat(BeatFraction.Breve))
    }
    while (pins.digitalReadPin(DigitalPin.P1) > 600) {
        basic.showString("MAS HUMEDAD")
        music.playTone(784, music.beat(BeatFraction.Breve))
    }
})
