# API Endpoints :

| GET         | /                                    |
| ----------- | ------------------------------------------------------------ |
| Used to     | Redirect to web interface.                                            |
| Json Output | `None` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |


| GET         | /user/{mail}/{password}                                    |
| ----------- | ---------------------------------------------------------- |
| Used to     | Get an api token from a mail and password.                  |
| Json Output | `{"token": string, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| GET         | /status/{id_iot}                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Used to     | Get the status of the requested tracker from his id.                                                                                                                                          |
| Json Output | `status: {"bat": int, "charge": bool, "vehiclechg": bool, "protection": bool, "ecomode": bool, "alarm": bool, "protection": bool, "gps": bool, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |


| GET         | /iot_list/{token}                                                                            |
| ----------- | -------------------------------------------------------------------------------------------- |
| Used to     | Get the tracker list for the user from his token.                                                        |
| Json Output | `{"trackers": [{"name": string, "id": int},...],"user": string, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| GET         | /status_list/{token}                                                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Used to     | Obtain the status list of all the user's trackers from his token.                                                                                                                                                          |
| Json Output | `{"status_list":[{"bat": int, "charge": bool, "vehiclechg": bool, "protection": bool, "ecomode": bool, "alarm": bool, "protection": bool, "gps": bool},...], "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| GET         | /position/now/{id}                                                      |
| ----------- | ----------------------------------------------------------------------- |
| Used to     | Get the current position of the tracker based on his id.                               |
| Json Output | `{position: {"lon": float, "lat": float}, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| GET         | /position/history/{id}                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Used to     | Obtain all position history of a tracker based on his id.                                                                      |
| Json Output | `{"history": [{"lat": float, "lon": float, "timestamp": int},...], "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| GET         | /position/safezone/{id}                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Used to     | Obtain safezone for a specified tracker.                                                                      |
| Json Output | `{safezone: {lat: float, lon: float, diameter: int}, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| POST        | /user/{mail}/{password}                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Used to     | Add a user to the database with the specified mail and password.                          |
| Json Output | `Topics: {"topicTX": string, "topicRX": string},TrackerId: int, "error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| POST        | /iot/{token}/{name}                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Used to     | Add and link a tracker to the account and get the parameters needed to configure the tracker                          |
| Json Output | `"error": {"Code": int, "Message": string}}, "Topics": {"RX": string, "TX": string}, TrackerId: int` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| PUT         | /set/status/{id_iot}/{status_alarm}/{status_ecomode}/{status_protection}/{status_vh_charge}                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Used to     | Set new iot_device settings.                                                                      |
| Json Output | `"error": {"Code": int, "Message": string}}` |
| Status      | Implemented ✅ |
| Unit Test      | TODO ⏳ |

| DELETE      | /iot/{name}                                 |
| ----------- | ------------------------------------------- |
| Used to     | Delete a tracker from the system              |
| Json Output | `{"error": {"Code": int, "Message": string}}` |
| Status      | Not Implemented ❌ |
| Unit Test      | TODO ⏳ |

| DELETE      | /user/{mail}                                |
| ----------- | ------------------------------------------- |
| Used to     | Delete a user from system                   |
| Json Output | `{"error": {"Code": int, "Message": string}}` |
| Status      | Not Implemented ❌ |
| Unit Test      | TODO ⏳ |
