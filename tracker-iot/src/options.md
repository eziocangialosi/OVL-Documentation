\page page_options Options

This page shows all options you can activate on the tracker :
 - \subpage page_chargebat
 - \subpage page_ecomode


\page page_ecomode EcoMode

This page presenting the EcoMode option.

\warning The developpement of this option is deflected to the future<br>
This option is not currently implemented in the tracker code

# Purpose
***
This option aims to temporarily reduce the tracker power comsumption to increase the autonomy.

# How to enable it
***
To enable this option put \ref DEFAULT_ECO_MODE_STS on true in config.h
\remark Because this option is not currently implemented, the edition of this define will not change anything.
Note that the ecomode will appears enable in the STS trame sended by the tracker.

