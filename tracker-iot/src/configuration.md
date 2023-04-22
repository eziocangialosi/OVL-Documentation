\page page_conf Configuring the tracker

In this page you will find detailed instruction to configure the tracker.
All tracker configuration is editable in config.h file.

# GPRS Configuration
***
The tracker use the GPRS network to communicate with the server. GPRS is a network protocol for mobile communication, used in particular in our cell-phones.<br>
To use this network, you should so have a phone plan and a SIM card. You also need to enter parameters in the tracker to log into the network.<br>
These parameters are APN url/address and GPRS credentials are provided by your mobile operator.<br>
Enter the APN url/address in \ref APN array. GPRS user and password should be enter in \ref GPRS_USER and \ref GPRS_PSWD.
Don't forget to enter your SIM pin in the \ref SIM_PIN macro if your SIM card have one.

# MQTT Configuration 
***
The internet protocol used by the tracker to communicate with server is MQTT.<br> To work, MQTT needs somes informations :
 - Broker URL/Addr (\ref BROKER)
 - TCP/IP Port used (\ref MQTT_PORT)
 - Transceiver topic (\ref TOPIX_TX)
 - Receiver topic (\ref TOPIX_RX)
 - MQTT user & password (\ref MQTT_USER, \ref MQTT_PSWD)
 
The two first parameters are given when you have install your MQTT broker. The three last, are sent to you when you create a new tracker on the mobile application.

# Miscellaneous parameters
***
## Modules baud
If you have choice to not used the preconized GPS and/or GPRS modules, you may need to change the speed of the serial communcation.
You can do it with \ref GSM_BAUD and \ref GPS_BAUD.

## GPRS Module selector
If you have choice a different GPRS module, you must edit the selected module.
Uncomment the module you want to use and comment all the others.
This is the macro list of the supported modules :
 - \ref TINY_GSM_MODEM_SIM800
 - \ref TINY_GSM_MODEM_SIM808
 - \ref TINY_GSM_MODEM_SIM868
 - \ref TINY_GSM_MODEM_SIM900
 - \ref TINY_GSM_MODEM_SIM7000
 - \ref TINY_GSM_MODEM_SIM7000SSL
 - \ref TINY_GSM_MODEM_SIM7080
 - \ref TINY_GSM_MODEM_SIM5360
 - \ref TINY_GSM_MODEM_SIM7600
 - \ref TINY_GSM_MODEM_UBLOX
 - \ref TINY_GSM_MODEM_SARAR4
 - \ref TINY_GSM_MODEM_M95
 - \ref TINY_GSM_MODEM_BG96
 - \ref TINY_GSM_MODEM_A6
 - \ref TINY_GSM_MODEM_A7
 - \ref TINY_GSM_MODEM_M590
 - \ref TINY_GSM_MODEM_MC60
 - \ref TINY_GSM_MODEM_MC60E
 - \ref TINY_GSM_MODEM_ESP8266
 - \ref TINY_GSM_MODEM_XBEE
 - \ref TINY_GSM_MODEM_SEQUANS_MONARCH
 
## Tracker algorithm configuration
### Triggered distance
You can edit the sensibility of the position change with \ref DISTANCE_TRIG. If you increase it, the detection of a movement will be coarser.
### Position Intervals
The tracker used some intervals to limit and/or force the sending of a position of the server.\n
These are the interval macros :
 - \ref MINIMAL_INTERVAL
 - \ref DEFAULT_INTERVAL
 - \ref DEFAULT_INTERVAL_WHEN_ALM

### Safezone
You can increase or decrease the diameter of the safezone with \ref DEFAULT_SAFE_ZONE_DIAM. This diameter is used to know when the tracker is outside the autorized zone and so when the vehicle is theft.
\remark We advise you not to decrease the diameter of the safezone because of the GPS module accuracy.

### USB Serial baud
The speed of the USB debug serial communication can be modifided with \ref USB_BAUD.

