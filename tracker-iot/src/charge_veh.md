\page page_chargebat ChargingOnVehicle

This page presenting the ChargingOnVehicle option.

\warning This option is currently in developpement, caution when you use it !<br>
It is implemented in the code but the electronic schematic is not yet definitive and reliable

\bug When the tracker battery is in charge, it may be the SIM800L unable to communicate
(This because the SIM800L may recive 5 volts instead of 4,2 volts max)

# Purpose
***
This option is here to allow the tracker to recharging itself on the vehcile battery

# How it's work
***
When the option is activated, the tracker will check if power is available on \ref VEH_ALIM_SENSOR_PIN.<br>
If power is available from \ref DELAY_CHG_VEH (default 5min), the tracker will order charging module to sending power on usb port
by putting HIGH on \ref VEH_ALIM_RELAY_PIN.

# Make the charging module
***
To make this charging module, some additionnal hardware is needed.
## Hardware list
- LM2596 DC-DC Power Supply Module
- 5VDC Relay
- 10k Ohms Resistor
- 1k Ohms Resistor
- 1N4007 Diode
- USB-A Female port
- BC547 Transistor
- Wires
- USB-A to USB-C Wire
- Terminal Block

Caution, you also will need of 2 pairs of connectors for the SENSOR and COMMAND (CMD) Wires and the firebeetle.

## Module schematic

<img src="./src/media/charging_on_vehicle.png">

## Firebeetle wiring schematic

<img src="./src/media/charging_on_veh_esp.png" width="50%" height="50%">\n

You can see on the schematic that vehicle power comes throught the USB-C port.\n
You can also remark that the SENSOR and COMMAND are wired on pin 4 and 12.

## Example of a realization

<img src="./src/media/charging_module.jpg" width="50%" height="50%">\n

This is an example of a realization of the charging module.
This realization it make with a 4x6cm PCB where components are solded.

# How to enable it
***
To enable this option put \ref DEFAULT_VEH_CHG_STS on true in config.h
 
