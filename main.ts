input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
