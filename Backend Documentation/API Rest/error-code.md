# [Error code list of the API](error-code-list-of-the-api)
| **Error Code** | **Error Name**                | **Error Message**                                                        | Error Description                                |
|----------------|-------------------------------|--------------------------------------------------------------------------|--------------------------------------------------|
| **0**          | `ErrorOK`                     | Nothing goes wong.                                                       | Nothing failed                                   |
| **1**          | `ErrorUnknownError`           | An unknown error has occurred, please check system logs.                 | Any error not handled below get this error code. |
| **10**         | `ErrorSQLUnavailable`         | SQL Server Unavalable, contact system administrator.                     | The SQL server is unavailable                    |
| **11**         | `ErrorSQLConnectionRefused`   | SQL Server rejected the credentials, contact system administrator.       | SQL Server credentials are refused by MariaDB    |
| **12**         | `ErrorSQLSelectError`         | Unable to retrieve the data from the database, please check system logs. | SQL Select request as failed                     |
| **13**         | `ErrorSQLInjectError`         | Unable to insert new data in the database, please check system logs.     | SQL Inject request as failed                     |
| **14**         | `ErrorSQLUpdateError`         | Unable to replace data in the database, please check system logs.        | SQL Update request as failed                     |
| **15**         | `ErrorSQLDeleteError`         | Unable to delete data from the database, please check system logs.       | SQL Delete request as failed                     |
| **16**         | `ErrorSQLTimeout`             | Timeout during SQL request, please check system logs.                    | SQL Request got timeout                          |
| **20**         | `ErrorMQTTConnectionRefused`  | MQTT has denied the connection, please check system logs.                | MQTT Refused the connection                      |
| **21**         | `ErrorMQTTTrackerUnavailable` | MQTT Can't access to the tracker, please check system logs.              | MQTT Can't access the tracker                    |
| **22**         | `ErrorMQTTChecksumError`      | MQTT Answer got altered, please check system logs.                       | MQTT Response got corrupted, wrong checksum      |
| **30**         | `ErrorUserWrongCredentials`      | The supplied password is wrong.                       | The supplied password is wrong.      |
| **31**         | `ErrorUserAlreadyExist`      | The specified mail already exist in the user DB.                       | The specified mail already exist in the user DB.      |
| **32**         | `ErrorUserNotFound`      | The specified mail is not associated with any account.                       | The specified mail is not associated with any account.      |
| **33**         | `ErrorUserHasNoTracker`      | The specified user don't have any tracker..                       | The specified user don't have any tracker.      |
| **34**         | `ErrorUserTokenIsInvalid`      | The specified token is invalid                      | This token is invalid.      |
| **90**         | `ErrorAPINotImplemented`      | This API call is not implemented, check your request and try again.      | API Call not implemented                         |
| **91**         | `ErrorAPIInternalError`       | API Got an internal error, check your request and try again.             | API Got Internal error                           |
| **92**         | `ErrorAPIWrongCall`           | Wrong args for this API Call                                             | API Got wrong arguments                          |
