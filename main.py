TobbieClapWalk = 0
def Tobbie_Stop():
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P14, 0)

def on_sound_loud():
    global TobbieClapWalk
    if TobbieClapWalk == 2:
        Tobbie_Walk()
        control.wait_micros(5000000)
        Tobbie_Stop()
        TobbieClapWalk = 0
    else:
        if True:
            pass
        TobbieClapWalk += 1
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def Tobbie_Walk():
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.digital_write_pin(DigitalPin.P14, 0)

def on_forever():
    pass
basic.forever(on_forever)
