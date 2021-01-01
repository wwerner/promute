# promute
Promute is a browser addon that automatically mutes twitter accounts sending promotions to your timeline as you scroll by.

It's not very special, but scratches my personal itch and I can't mislay it now that it's published for Chrome and FF.

It does the simplest thing that could possibly work.
Within a scroll listener, it ...
* ... identifies promoted tweets by the 'Promoted' label at the bottom,
* ... opens the tweets context menu,
* ... and clicks the mute button

You can review the muted accounts as usual in your twitter settings: https://twitter.com/settings/muted/all

## Requirements

Promute is known to work with current versions of Firefox (v72) and Chrome (v87). Other browsers have not been tested.

## Installation

* Chrome: https://chrome.google.com/webstore/detail/promute/jcglghjinanokeldhiebokopnoppbnnn
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/promute/

### Manual Installation - Firefox

* Clone or download & unpack (https://github.com/wwerner/promute/archive/main.zip) this repository,
* open the about:debugging page, 
* click "This Firefox" (in newer versions of Firefox), 
* click "Load Temporary Add-on", 
* then select any file in your extension's directory.

Source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing

![Install Firefox Extension](doc/install-manually-ff.png "Install Firefox Extension")

### Manual Installation - Chrome

* Clone or download & unpack (https://github.com/wwerner/promute/archive/main.zip) this repository,
* go to chrome://extensions,
* enable `Developer Mode`,
* click `Load Unpacked`,
* and select the downloaded repository's root folder

![Install Chrome Extension](doc/install-manually-ch.png "Install Chrome Extension")

🥳 Enjoy your twitter feed w/o promotions.

Feel free to raise an issue on Github, if it does not work for you.

