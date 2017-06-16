# example of rsg-components
Click a button to send data from the server, fetch the same data from the server and show it in an RSGBox component. Powered by Meteor and uses the development version of rsg-components (aka you must build rsg-components before using this). Example of usage of all components in RSGComponents (WIP).

## Notes:
1. It does not use a native version of RSGFormBasic and simply uses something similar with same styling due to certain issues with the API as of yet.
2. CSS-dependent components (ones which haven't been ported to inline styles yet) are not used.
3. Aphrodite is an external of RSGComponents. As a built version of RSGComponents without a bundle of Aphrodite is being used, lodash and aphrodite are used as dependencies. DO NOT DO THIS IN YOUR APP UNLESS YOU ARE USING THEM.