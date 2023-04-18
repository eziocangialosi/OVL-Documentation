\page page_chargebat ChargingOnVehicle - Option

This page presenting the ChargingOnVehicle option.

\warning This option is currently in developpement, caution when you use it !<br>
It is implemented in the code but the electronic schematic is not yet definitive and reliable

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
Soon...

# How to enable it
***
To enable this option put \ref DEFAULT_VEH_CHG_STS on true in config.h
