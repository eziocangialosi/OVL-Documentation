# Data stored and exchanged on the system

## Table of Content
- [Database Data Ssore](#database)
- [Data exchange between IOT and API](#data-exchange-between-iot-and-api)

## Database
- Database Data Store
  - HistoryRq
    | Type         | Name      | Description                                     |
    |--------------|-----------|-------------------------------------------------|
    | int          | id_iot    | Unique id to link the request to the IOT device |
    | int          | id_user   | Unique id to link the request to the user       |
    | varchar[255] | lastRq    | The request himself                             |
    | timestamp    | tm_lastRq | Time at which the command was received          |
  
  - Pos_IOT
    | Type         | Name      | Description                                     |
    |--------------|-----------|-------------------------------------------------|
    | float        | posx      | Longitude (Position X) of the device            |
    | float        | posy      | Latitude (Position Y) of the device             |
    | varchar[255] | lastRq    | Time at which the position was taken            |
    | int          | id_iot    | Unique id to link the data to the IOT device    |
    
  - CredentialsTracker
    | Type         | Name        | Description                                            |
    |--------------|-------------|--------------------------------------------------------|
    | varchar[255] | trackerName | Name of the tracker displayed in the user Application  |
    | varchar[255] | MQTTpswd    | Password to access MQTT protocol                       |
    | varchar[255] | topicRX     | Topic used to transmit data between API and IOT Device |
    | varchar[255] | topicTX     | Topic used to transmit data between API and IOT Device |
    | int          | id_user     | Unique ID of the user link to the IOT device           |

  - HistoryUsers
    | Type      | Name         | Description                      |
    |-----------|--------------|----------------------------------|
    | int       | id_user      | Unique id of the user            |
    | timestamp | tm_lastLogin | Timestamp of the last user login |
  
  - Status_IOT
    | Type      | Name               | Description                                                                  |
    |-----------|--------------------|------------------------------------------------------------------------------|
    | int       | id_iot             | Unique id to link data to the IOT device                                     |
    | bool      | status_online      | Boolean value used to indicate if the IOT device is online                   |
    | bool      | status_charge      | Boolean value used to indicate if the IOT device is charging                 |
    | int       | status_bat         | Integer of battery percent left                                              |
    | bool      | status_alarm       | Boolean value used to indicate if the alarm is yelling                       |
    | bool      | status_ecomode     | Boolean value used to indicate if the eco-mode is activated                  |
    | bool      | status_protection  | Boolean value used to indicate if the protection is on                       |
    | bool      | status_vh-charge   | Boolean value used to indicate if the tracker can charge on vehicule battery |
    | bool      | status_gps         | Boolean value used to indicate if the tracker have a gps fix                 |
    | timestamp | tm_status          | Time at which the status was retrieved                                       |
  
  - Users
    | Type         | Name    | Description                                           |
    |--------------|---------|-------------------------------------------------------|
    | int          | id_user | Unique id of the user                                 |
    | varchar[255] | email   | Email of the user                                     |
    | varchar[255] | psswd   | Password of the user                                  |
    | varchar[255] | token   | A2F Token                                             |

## Data exchange between IOT and API

- IOT Data

  | Type      | Name          | Description                                                  |
  |-----------|---------------|--------------------------------------------------------------|
  | int       | id_iot        | Unique id to link data to the IOT device                     |
  | int       | status_online | Boolean value used to indicate if the IOT device is online   |
  | int       | status_charge | Boolean value used to indicate if the IOT device is charging |
  | int       | status_bat    | Integer of battery percent left                              |
  | int       | status_alarm  | Boolean value used to indicate if the alarm is yelling       |
  | timestamp | tm_status     | Time at which the status was retrieved                       |
