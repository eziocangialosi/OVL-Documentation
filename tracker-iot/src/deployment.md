\page page_deployment Deployment

You want make your own tracker, your're in the good page !\n

\warning Installing the tracker is the last step of the project deployment, please install server and interfaces part before

# Step 1: Electronic
***
## Hardware list
Ensure you have all the needed electronic:
 - Firebeetle 2 ESP32-E
 - NEO6M-V2
 - SIMCom SIM800L
 - 680uF 6.3v capacitor
 - Battery 
 - Wires

For the battery, please go on \ref section_battery page for more informations.
## Hardware schematic
Please wire your electronic according to the following schematic :\n
<img src="./src/media/electronic_schematic.png">\n
We advise you to solder the wires to the components only after having tested the correct operation of the system\n
If you need more documention on electronic go one the \ref page_electronic page.

## Box
You can print a box to protect the electronic with a 3D printer.
All informations are available on \ref page_box page.

# Step 2: Code
***
Caution Arduino IDE is mandatory to upload the code to the microcontroller.
You also need to have everythig is reported on the \ref page_dependencies page.

## Download
Download all the tracker code on the <a href="https://github.com/eziocangialosi/ovl-iot">github</a>. You can do it with the following command :
```
git clone https://github.com/eziocangialosi/ovl-iot OVL-IoT
```
## Configuration
Open the OVL-IoT.ino file with Arduino IDE and go on the \ref config.h file.\n
The important points to edit are:
 - The MQTT broker URL and port (\ref BROKER, \ref MQTT_PORT)
 - The MQTT credentials (\ref TOPIC_TX, \ref TOPIC_RX, \ref MQTT_USER, \ref MQTT_PSWD)
 - The GPRS settings (\ref GSM_PIN, \ref APN, \ref GPRS_USER, \ref GPRS_PSWD)

If you want to add the \ref page_chargebat option, pass to true the \ref DEFAULT_VEH_CHG_STS flag.\n
You can have more informations on the tracker configuration in the \ref page_conf page.
\pre Caution, enabling this option requires additional hardware detailed on \ref page_chargebat page.

## Upload
After having edit the configuration file, you should upload the program to the microcontroller.
- Configure the Arduino IDE with the DFRobot Firebeetle ESP32-E core.
- Plug the Firebeetle to your computer with the USB-C wire.
- Click on the upload button, and wait for the success message.
- You can now unplug the USB-C wire.

# Step 3: Tests
***
\pre Before testing the tracker, please note that the server should be operational

Plug the battery, and look at the RGB LED, if all is well, it should light up orange.\n
Go on the \ref page_led_codes to learn more about LED error codes.\n
If there is a problem, the LED should light up in red.

# Step 4: Installation on the vehicle
***
Once the tracker work, try to find a great place for it on your vehicle. <br>
You will find all tips to do it on the \ref page_veh_install page.<br>
We advise you to re-test the tracker after having install it on your vehicle.
