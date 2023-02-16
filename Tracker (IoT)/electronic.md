# Electronics modules/parts, specifications, debug infos
Here are all the boards and electronics part used by the project
## Microcontroler, developpement board
The project use a [Firebeetle 2 ESP32-E](https://www.dfrobot.com/product-2195.html).

## GPRS communication
To communicate with the server, we chose to use the GPRS network.
To do that we headed to the [SIMCom SIM800L](https://www.simcom.com/product/SIM800.html) module.
This module communicate with UART link at 9600 baud.
> :bulb: **Tip:** The SIM800L module has a short peak consuption at 2A, this peak is unmanageable for the Firebeetle's battery monitor. To correct this problem, wire a capacitor in parallel with the SIM800L power supply.

## Location 
To be able to locate we used a u-blox NEO6MV2 module. It communicate to with an UART link at 9600 baud.

## Debugging the tracker
If the tracker seems not working you can firstly reset it with the RST button on the Firebeetle board.
Secondly, you can plug it to your computer with an USB-C wire, and read the debug infos with a serial communication program like minicom at 115200 baud.
