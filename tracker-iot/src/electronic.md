\page page_electronic Electronics

Electronics modules/parts, specifications, debug infos\n
Here are all the boards and electronics part used by the project

# Microcontroler, developpement board
***
The project use a [Firebeetle 2 ESP32-E](https://www.dfrobot.com/product-2195.html).

# GPRS communication
***
To communicate with the server, we chose to use the GPRS network.
To do that we headed to the [SIMCom SIM800L](https://www.simcom.com/product/SIM800.html) module.
This module communicate with UART link at 9600 baud.
> 💡 **Tip:** The SIM800L module has a short peak consuption at 2A, this peak is unmanageable for the Firebeetle's battery monitor. To correct this problem, wire a capacitor in parallel with the SIM800L power supply.

# Location
***
To be able to locate we used a u-blox NEO6MV2 module. It communicate to with an UART link at 9600 baud.

\section section_battery Battery
***
The tracker need a battery to work. This battery is an LiPo 3.7V.
@note The battery capacity has not been yet defined.

@warning The tracker haven't currently a security against battery discharge, so make cation to battery level.

@bug When the tracker battery is in charge, it may be the SIM800L unable to communicate
(This because the SIM800L may recive 5 volts instead of 4,2 volts max)

# Debugging the tracker
***
If the tracker seems not working you can firstly reset it with the RST button on the Firebeetle board.
Secondly, you can plug it to your computer with an USB-C wire, and read the debug infos with a serial communication program like minicom at 115200 baud.
The debugging is also possible with \ref page_led_codes.
