# Manual for data-files
This file contains blablablah, but also some information about the several data-files. Since we're in development all data structures have implementations for testing purposes. When releasing, those files should be deleted and only `*.template.json` files should be used.

## Structure (root is the "data"-folder of the project)
**Bold** items are folders, *italic* items still need to be implemented.
- **completed_rubrics**
  - \*.json
- general_settings.template.json should become *settings.template.json*
-

##### settings.json
This file contains all the basic settings for a tournament. It contains the lanes and their corresponding rooms, and more.

##### judgingpanels.json
This contains the names and rooms of the juding panels.

##### teams.json
Contains the teams of a tournament. This file has the same structure as in the other FLL-applications.

##### questions.json
Contains a json-translation of the FIRST-juding rubrics forms and the information to implement those rubrics in the application.

##### awards.json
Contains all the (judging) awards of a tournament. This file can be used to transport to other applications such as the [https://github.com/FirstLegoLeague/displaySystem](display system) for filling in the overlays.
