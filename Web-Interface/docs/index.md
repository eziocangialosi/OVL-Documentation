# User Documentation

If you're not looking for the web interface part you can navigate between all the repositories in the [Project navigator](https://github.com/eziocangialosi/OpenVehicleLocator#project-navigation).

## Requirement

* Have already installed and configured the Api 

## Installation

* `wget https://github.com/eziocangialosi/OVL-WebInterface.git -O ovl-website.deb` - Install the Website.
* `sudo dpkg -i ovl-website.deb` - Extract the Website.

## Usage

Go to website/php/initLink.php and adapts the links 

    <?php
        $API_link = "https://example.com";
        $Website_link = "https://example.com/";
    ?>

## Features

* Connect to your account
* Access to your Trackers
* See the position of your Vehicule on a map
* See the last 20 positions of your Vehicule
* Download the history of your 20 last positions
* Have informations about the status of your trakers (Battery Charge, Online/Offline, alarm, ecomode, protection and charge)
* Modify some informations like actived or not the ecomode, the protection or the charge