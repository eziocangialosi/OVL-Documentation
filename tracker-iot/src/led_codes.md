\page page_led_codes RGB LED debug codes

Here you will find the explaination of the debug codes printed by the RGB LED.\n

| Color | Description                                                                               |
|-------|-------------------------------------------------------------------------------------------|
|🟧🟧🟧🟧| The tracker is initializing, please wait                                                   |
|⬛🟧⬛🟧 | The tracker trying to handcheck with the server                                            |
|🟦🟦🟦🟦| The tracker waiting for the gps fix (is available), please wait, it could last 60 sec max  |
|⬛🟦⬛🟦 | The tracker as lost gps fix, (position is no longer available), it try to keep it back     |
|⬛🟪⬛🟪 | GPRS and/or MQTT connection is lost, trying to keep it back                                |
|⬛🟩⬛🟩 | The tracker send/recive an MQTT message                                                    |
|🟥🟥🟥🟥| A fatal error occured, please check the configuration and reboot the tracker               |

### Legend:
⬜⬜⬜⬜ Constant light up in a color\n
⬛⬜⬛⬜ Blinking in a color


