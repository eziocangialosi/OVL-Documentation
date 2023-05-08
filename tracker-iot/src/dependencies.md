\page page_dependencies Dependencies
Dependencies for the Tracker (IoT) part

# Libraries
***
All theses libraries are needed to ake the code works :
- [TinyGSM](https://github.com/vshymanskyy/TinyGSM) for communication with the GPRS module
- [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus) for communication with the GPS module
- [PubSubClient](https://github.com/knolleary/pubsubclient) for use the MQTT protocol
- [FastLED](https://github.com/FastLED/FastLED) for manage the debug RGB LED

# Arduino Core
***
You need to install a core for the firebeetle ESP32-E board, this core is the [DFRobot firebeetle core](http://download.dfrobot.top/FireBeetle/package_DFRobot_index.json)

# Libraries modifications needed
***
On the firebeetle ESP32-E only one other serial port is wired (The Serial2 on pins 16 & 17), you need to edit the library HardwareSerial in the core file to use the Serial port n°1.<br>
For this you need to edit the HardwareSerial.cpp file in `~/.arduino15/packages/DFRobot/hardware/esp32/0.2.1/cores/esp32/`<br>
Edit the following lines (in the `#if CONFIG_IDF_TARGET_ESP32` part) like this :
```
#define RX1 /*9*/26
#define TX1 /*10*/25
```
