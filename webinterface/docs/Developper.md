# Developper Documentation
## Connection
### connect.php
#### Use for
* Declare the HTML document with a DOCTYPE and set the language attribute to "en".
* Define the head section, including meta tags, custom styles, and a title.
* Begin the body of the document.
* Include the header and connect templates.
* Define an associative array of messages and their corresponding CSS classes.
* Check if the 'connexion' GET parameter is set and if it exists in the messages array.
* Display the corresponding message and apply the appropriate CSS class if the condition is met.
* Close the message display condition.
* Include the footer template.
* Include the MDB (Material Design Bootstrap) JavaScript library.
* Close the body and HTML tags.

#### Explanation

➡️ This section is used to set up the HTML document structure and include necessary files.

``` html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connection</title>
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="css/mdb.min.css" />
</head>
<body>
``` 
➡️ This code snippet is used to include the header and connect templates.

``` php

    <?php 
    include('template/header.php');
    include("template/connect.php"); 
``` 
➡️ This code snippet defines an array of messages and their corresponding CSS classes.

``` php

    // Define messages and their corresponding CSS classes
    $messages = [
        1 => ['message' => 'Wrong Password !', 'class' => 'alert-danger'],
        2 => ['message' => 'Wrong Email !', 'class' => 'alert-danger'],
        3 => ['message' => 'Successfully disconnect !', 'class' => 'alert-success'],
        4 => ['message' => 'API Connection Lost !', 'class' => 'alert-danger'],
    ];
``` 
➡️ This code snippet is used to display a message if it exists based on the 'connexion' GET parameter.

```php

    // Display the message if it exists
    if (isset($_GET['connexion']) && isset($messages[$_GET['connexion']])) {
        $message = $messages[$_GET['connexion']];
    ?>
        <div class="alert <?php echo $message['class']; ?> mt-4 mb-4 alert_test alert-dismissible" role="alert">
            <?php echo $message['message']; ?>
            <a href="#" class="close" data-dismiss="alert" style="margin-left: 20px; margin-right: 20px" aria-label="close"><i class="fa-solid fa-xmark"></i></a>
        </div>
    <?php
    }
``` 
➡️ This code snippet is used to include the footer template and load the JavaScript file.

```php

    include('template/footer.php');
    ?> 
    <script type="text/javascript" src="js/mdb.min.js"></script>
</body>
</html>
``` 
### template/connect.php
#### Use for
* Create a centered background color section using the `<section>` element with a "text-center" class.
* Add a background image with a custom style, setting the background color and height.
* Create a design block for the login form using a `<div>` element with a card and other styling classes.
    * Apply custom styles for the card, such as margin, background color, backdrop filter, and maximum width.
* Add a card body with a form inside.
    * Use a `<div>` element with a "card-body" class and apply padding styles.
* Create a row with centered content using "d-flex" and "justify-content-center" classes.
* Add the login form inside a `<div>` element.
    * Set the column width for large screens to 8.
* Add a form header with a bold "Login" title.
* Create the form with an action pointing to "php/verifyConnect.php" and a POST method.
    * Add an email input field with validation error.
        * Use a "form-outline" class and apply margin styles.
    * Add a password input field with validation error.
        * Use a "form-outline" class and apply margin styles.
* Add a submit button with Bootstrap classes and custom styles.
* Close all the HTML elements.
#### Explanation

➡️ This section is use for center the text

``` html
<!-- Background color section-->
<section class="text-center">
```

➡️ This div is use for add an background color
```html
  <!-- Background image -->
  <div class="p-5 bg-image" style="
        background-color: #647295;
        height: 300px;
        "></div>
```

➡️ this code snippet allows you to position the form
```html
  <!-- Design block for the login form -->
  <div class="card mx-4 mb-5 mx-md-auto shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        max-width: 900px;
        ">
    <!--Card body with form -->
    <div class="card-body py-5 px-md-5 card_modify">
      <div class="row d-flex justify-content-center">
        <!-- Login form -->
        <div class="col-lg-8">
```

➡️ this html tag use for position... the form title
```html
<!-- Form header -->
    <h2 class="fw-bold mb-5">Login</h2>
```

➡️ this form tag redirect the informations of the form to the php/verifyConnect.php using the method POST
```html
<form  action="php/verifyConnect.php" method="POST">
```

➡️ this code snippet is an input in the form use for enter an email adress. This input verify if the email adress is corect. If the email is not in the database the input will be red 
```html
<!-- Email input field with validation error-->
    <div class="form-outline mb-4">
        <input type="email" id="form3Example3" class="form-control <!-- PHP code to check if the connexion is valid, if not then show error message. --> <?php if(["connexion"] == 2){ ?> is-invalid <?php } ?>" name="email" required/>
        <label class="form-label" for="form3Example3">Email</label>
    </div>
```

➡️ This one is the same but for the password
```html
<!-- Password input field with validation error-->
    <div class="form-outline mb-4">
        <input type="password" id="form3Example4" class="form-control <!-- PHP code to check if the connexion is valid, if not then show error message. --> <?php if(["connexion"] == 1){ ?> is-invalid <?php } ?>" name="password" required/>
        <label class="form-label" for="form3Example4">Password</label>
    </div>
```

➡️ This is just the submit button
```html
    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-primary btn-block mb-4 button_modify">
        Login
    </button>
```



### php/verifyConnect.php
#### Use for
* `if (isset($_POST['email']) && isset($_POST['password'])) {` - Verify if the user complete the form
* `$users_verif = file_get_contents($API_link ."/user/" . $email . "/" . $mdp);` - Get informations about the user using the API request
* `if($users_verif != "")` - Verify if the user exist in the database
* `if ($parsed_users_verif->{'error'}->{'Code'} == "0") {` - Check that the error code is returned by the Api
* `header('Location: https://exemple.com/iotList.php?connexion=0');` - Redirects to a page based on the Api response

#### Explanation

➡️ The script starts a new session and includes the initLink.php file

```php
session_start();
include 'initLink.php';
```

➡️ The script checks if email and password are set in the POST request

```php
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $mdp = $_POST['password'];
```
➡️ The script fetches user data from the API using email and password

```php
$users_verif = file_get_contents($API_link ."/user/" . $email . "/" . $mdp);
$parsed_users_verif = json_decode($users_verif);
```
➡️ The script prints the raw response data

```php
echo $users_verif;
```

➡️ The script checks if the response is not empty

```php
if($users_verif != "") {
```

➡️ The script checks the response status code and handles it accordingly

* If the status code is 0 (successful login), it sets the session variables and redirects to iotList.php
* If the status code is 30 (wrong password), it unsets the user session and redirects to connect.php with a flag for wrong password
* If the status code is 32 (non-registered user), it unsets the user session and redirects to connect.php with a flag for non-registered user

```php
if ($parsed_users_verif->{'error'}->{'Code'} == "0") {
    unset($_SESSION["Connexion"]);
    $_SESSION["user"]["time"] = time();
    $_SESSION["user"]["token"] = $parsed_users_verif->{'user'};
    header('Location: https://exemple.com/iotList.php?connexion=0');
} elseif ($parsed_users_verif->{'error'}->{'Code'} == "30") {
    unset($_SESSION["user"]);
    header('Location: https://exemple.com/connect.php?connexion=1');
} elseif ($parsed_users_verif->{'error'}->{'Code'} == "32") {
    unset($_SESSION["user"]);
    header('Location: https://exemple.com/connect.php?connexion=2');
}
```

➡️ If the response is empty, the script redirects to connect.php with a flag for API connection lost

```php
} else {
    header('Location: https://exemple.com/connect.php?connexion=4');
}
```

## IOT List
### iotList.php
#### Using for
* Declare the HTML document with a DOCTYPE and set the language attribute to "en".
* Define the head section, including meta tags, custom styles, and a title.
* Begin the body of the document.
* Include the header template.
* Check if a user session is set and display content accordingly.
* Display a centered title "Trackers List".
* Include the IoTArray template.
* Display a success message if the 'connexion' GET parameter is set.
* Close the content display condition when a user session is set.
* Include the footer template.
* Close the body and HTML tags.
#### Explanation

➡️ The HTML document is declared with a DOCTYPE and a lang attribute set to "en"

```html
<!DOCTYPE html>
<html lang="en">
```

➡️ The head section includes meta tags, custom styles, and a title

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Custom styles -->
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="css/mdb.min.css" />
    
    <title>Trackers</title>
</head>
```

➡️ The body of the document begins

```html
<body>
```


➡️ The header template is included

```php

    <?php
        // Include header template
        include('template/header.php');
    ?>
```

➡️ The content is displayed if a user session is set

```php

    <?php if (isset($_SESSION['user'])) { ?>
```

➡️ A centered title "Trackers List" is displayed

```html

    <br>
    <h1 style="text-align: center">Trackers List</h1>
```
➡️ The IoTArray template is included

```php
        <?php
            // Include IoTArray template
            include('template/IotArray.php');
```
➡️ A success message is displayed if the 'connexion' GET parameter is set

```php

            // Display success message if 'connexion' is set
            if (isset($_GET['connexion'])) {
        ?>
                <div class="alert alert-success mt-4 mb-4 alert_test alert-dismissible" role="alert">
                    Login Successfully !
                    <a href="#" class="close" data-dismiss="alert" style="margin-left: 20px; margin-right: 20px" aria-label="close"><i class="fa-solid fa-xmark"></i></a>
                </div>
        <?php 
            } 
        ?>
```

➡️ The content is closed if a user session is set

```php

    <?php
        }
```
➡️ The footer template is included

```php

        // Include footer template
        include('template/footer.php');
    ?>
```
➡️ The body and HTML tags are closed

```html

</body>
</html>
```




### template/iotArray.php
#### Using for
* Declare the HTML document with a DOCTYPE and set the language attribute to "en".
* Define the head section, including meta tags, custom styles, and a title.
* Begin the body of the document.
* Include the header template.
* Check if a user session is set and display content accordingly.
    * Fetch status and IoT data from a remote server.
    * Decode the JSON data into arrays.
    * Check if there are no errors in the fetched IoT list.
        * Create an HTML table to display IoT devices and their information.
        * Loop through the IoT devices and create a table row for each one.
            * Display the IoT device data in the table row, including its online status.
            * Fetch historical data for the current IoT device and display it, or display "NaN" if not available.
        * Close the loop.
        * Close the HTML table.
    * Display an error message if there are errors in the fetched IoT list.
* Display a success message if the 'connexion' GET parameter is set.
* Close the content display condition when a user session is set.
* Include the footer template.
* Close the body and HTML tags.

#### Explanation

➡️ This code snippet fetches status and IoT data from a remote server and stores them in variables.

```php
$status_list = file_get_contents($API_link ."/status_list/" . $_SESSION["user"]["token"]);
$iot_list = file_get_contents($API_link ."/iot_list/" . $_SESSION["user"]["token"]);
```
➡️ This code snippet decodes the fetched JSON data into arrays.

```php
$parsed_status_list = json_decode($status_list);
$parsed_iot_list = json_decode($iot_list);
$extract_iot_list = $parsed_iot_list->{'trackers'}->{'iotArray'};
```
➡️ This code checks if there are no errors in the fetched IoT list.

```php
if ($parsed_iot_list->{'error'}->{'Code'} == 0) {
```
➡️ This code snippet creates the start of an HTML table.

```php
    echo "<br>";
    echo "<div class='table-responsive'>";
    echo "<table class='table table_modify table-responsive container-xxl mt-5 mb-5'>";
    echo     "<thead class='table-dark table_modify'>";
    echo         "<th scope='col'>#</th>";
    echo         "<th scope='col'>Name</th>";
    echo         "<th scope='col'>Status</th>";
    echo         "<th scope='col'>PosX</th>";
    echo         "<th scope='col'>PosY</th>";
    echo         "<th scope='col'></th>";
    echo     "</thead>";
    echo     "<tbody>";
```
➡️ This code snippet loops through the IoT devices and creates a table row for each one.

```php
    for ($i = 0; $i < count($extract_iot_list); $i++) {
        $id = $i + 1;
```
➡️ This code snippet displays the IoT device data in the table row.

```php
        echo "<tr>";
        echo "<th scope='row'>", $parsed_iot_list->{'trackers'}->{'iotArray'}[$i]->{'id'}, "</th>";
        echo "<td>", $parsed_iot_list->{'trackers'}->{'iotArray'}[$i]->{'trackerName'},  "</td>";
```
➡️ This code snippet checks the online status of the IoT device and displays it.

```php
        if ($parsed_status_list->{'status_list'}[$id - 1]->{'status_online'} == 1) {
            echo "<td><i class='fa-solid fa-check'></i> Online !</td>";
        } else {
            echo "<td><i class='fa-solid fa-xmark'></i> Offline !</td>";
        }
```
➡️ This code snippet fetches historical data for the current IoT device and displays it.

```php
        $history = file_get_contents($API_link ."/position/history/" . $id . "/");
        $parsed_history = json_decode($history);

        if ($parsed_history->{'error'}->{'Code'} == 0) {
            echo "<td>", end($parsed_history->{'history'})->{'lat'}, "</td>";
            echo "<td>", end($parsed_history->{'history'})->{'lon'}, "</td>";
            echo "<td><a href='historique.php?iot=", ($i + 1),  "'>",
            "<button type='button' class='btn button_modify'>  See ",
            "</button></a></td>";
            echo "</tr>";
        } else {
            echo "<td> NaN </td>";
            echo "<td> NaN </td>";
            echo "<td><button type='button' class='btn button_modify' disabled
```

## Position History
### historique.php
#### Using for

* Declare and retrieve GET parameters "iot" and "pos".
* Define the HTML document with a DOCTYPE and set the language attribute to "en".
* Define the head section, including meta tags, styles, and scripts for Leaflet and Bootstrap, and a title.
* Begin the body of the document.
* Include the header template.
* Fetch position history from the API and decode the JSON data.
* Check if a user session is set and display content accordingly.
    * Display a centered title "Position History".
    * Check if there are no errors in the fetched position history.
        * Create a row with two columns for displaying the map and position array.
            * In the first column, include a div element for the map.
            * In the second column, include the PositionArray template.
    * Close the content display condition when there are no errors in the fetched position history.
    * Include the param and map templates.
* Close the content display condition when a user session is set.
* Display an error message if there are errors in the fetched position history.
* Include the footer template.
* Close the body and HTML tags.

#### Explanation
➡️ Retrieve and store GET parameters "iot" and "pos".

```php
<?php
$iot = $_GET["iot"];
$pos = $_GET["pos"];
?>
```
➡️ Define the HTML document with a DOCTYPE and set the language attribute to "en".

```html
<!DOCTYPE html>
<html lang="en">
```

➡️ Define the head section, including meta tags, styles, and scripts for Leaflet and Bootstrap, and a title.

```html
<head>
    ...
</head>
```

➡️ Begin the body of the document and include the header template.

```html
<body>
    <?php
    include('template/header.php');
    ...
?>
```

➡️ Fetch position history from the API and decode the JSON data.

```php

    // Get position history from the API
    $history = file_get_contents($API_link ."/position/history/" . $iot . "/");
    $parsed_history = json_decode($history);
```

➡️ Check if a user session is set and display content accordingly.

```php

    <?php if (isset($_SESSION['user'])) { ?>
        ...
    <?php } else {
        echo $parsed_history->{'error'}->{'Message'};
    }
?>
```
➡️ Display a centered title "Position History".

```html

        <h1 style="text-align: center">Position History</h1>
```

➡️ Check if there are no errors in the fetched position history and create a row with two columns for displaying the map and position array.

```php
        <?php if ($parsed_history->{'error'}->{'Code'} == 0) { ?>
            <div class="row mb-5 history">
                ...
            </div>
            <?php
        }
```

➡️ In the first column, include a div element for the map.

```html

                <div class="col mt-5">
                    <div class="img-fluid">
                        <div id="map" style="min-height: 700px"></div>
                    </div>
                </div>
```

➡️ In the second column, include the PositionArray template.

```html

                <div class="col mt-5">
                    <?php include('template/PositionArray.php'); ?>
                </div>
```

➡️ Include the param and map templates.

```php

        include('template/param.php');
        include('template/map.php');
```

➡️ Display an error message if there are errors in the fetched position history.

```php

    } else {
        echo $parsed_history->{'error'}->{'Message'};
    }
```

➡️ Include the footer template and close the body and HTML tags.

```html
    include('template/footer.php');
    ?>
</body>
</html>
```

### template/PositionArray.php
#### Using for

* Declare and retrieve GET parameters "iot" and "pos".
* Define the HTML document with a DOCTYPE and set the language attribute to "en".
* Define the head section, including meta tags, styles, and scripts for Leaflet and Bootstrap, and a title.
* Begin the body of the document.
* Include the header template.
* Fetch position history from the API and decode the JSON data.
* Check if a user session is set and display content accordingly.
    * Display a centered title "Position History".
    * Check if there are no errors in the fetched position history.
        * Create a row with two columns for displaying the map and position array.
            * In the first column, include a div element for the map.
            * In the second column, include the PositionArray template.
        * Close the content display condition when there are no errors in the fetched position history.
        * Include the param and map templates.
    * Close the content display condition when a user session is set.
* Display an error message if there are errors in the fetched position history.
* Include the footer template.
* Close the body and HTML tags.

#### Explanation

➡️ Check if there are no errors in the fetched position history.

```php
<?php
if ($parsed_history->{'error'}->{'Code'} == 0) {
    ...
} else {
    echo $parsed_history->{'error'}->{'Message'};
}
?>
```
➡️ Retrieve and store GET parameters "iot" and "pos" and fetch safezone data from the API, then store its latitude and longitude in cookies.

```php

    // Get the iot device's key from the URL
    $iot = $_GET["iot"];
    $pos = $_GET["pos"];
    $safezone = file_get_contents($API_link . "/position/safezone/" . $iot . "/");
    $safezone_Json = json_decode($safezone);
    $_COOKIE['safezone']['lat'] = $safezone_Json->{'safezone'}->{'lat'};
    $_COOKIE['safezone']['lon'] = $safezone_Json->{'safezone'}->{'lon'};
```
➡️ Extract position history data from the decoded JSON data.

```php

    $extract_pos = json_decode($history)->{'history'};
```
➡️ Create a responsive Bootstrap table with a custom scrollbar.

```html

    <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table table_modify container-xxl">
            ...
        </table>
    </div>
```
➡️ Define table headers for date, latitude, longitude, and an empty header for a button.

```html

            <thead class="table-dark table_modify">
                <th scope="col">Date</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col"></th>
            </thead>
```
➡️ Loop through the history data in reverse order and create table rows with extracted information.

```php

            <tbody>
                <?php
                // Loop through the history data and create table rows
                for ($i = count($extract_pos); $i > 0; $i--) {
                ?>
                    ...
                <?php
                }
                ?>
            </tbody>
```
➡️ For each table row, display date, latitude, longitude, and a "See" button linking to the "historique.php" page with "iot" and "pos" parameters.

```html

                    <tr>
                        <td> ... </td>
                        <td> ... </td>
                        <td> ... </td>
                        <td> <a href="/historique.php?iot=<?php echo $iot ?>&pos=<?php echo $i - 1 ?>"> <button type="button" class="btn button_modify"> See </button> </a> </td>
                    </tr>
```
➡️ Add "Global" and "Exporter" buttons below the table, both linking to the "historique.php" page with the "iot" parameter.

```html

    <!-- "Global" and "Exporter" buttons -->
    <a href="/historique.php?iot=<?php echo $iot ?>"> <button type="button" class="btn button_modify"> Global </button> </a>
    <a href="php/download.php?iot=<?php echo $iot ?>"> <button type="button" class="btn button_modify"> Export </button> </a>
```
➡️ Display an error message if there are errors in the fetched position history.

```php

} else {
    echo $parsed_history->{'error'}->{'Message'};
}
```