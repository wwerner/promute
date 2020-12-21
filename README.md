# promute
Promute is a browser addon that automatically mutes twitter accounts sending promotions to your timeline as you scroll by.

It does the simplest thing that could possibly work.
Within a scroll listener, it ...
* ... identifies promoted tweets by the 'Promoted' label at the bottom,
* ... opens the tweets context menu,
* ... and clicks the mute button

You can review the muted accounts as usual in your twitter settings: https://twitter.com/settings/muted/all

## Requirements

Promute is known to work with current versions of Firefox (v72) and Chrome (v87). Other browsers have not been tested.

## Installation

You'll be hopefully able to install it from the Chrome and Firefox extension directory at 
https://chrome.google.com/webstore/category/extensions and https://addons.mozilla.org/de/firefox/, resp.

In the meantime, you'll need to perform a few manual steps.

* Clone or download & unpack (https://github.com/wwerner/promute/archive/main.zip) this repository.


### Firefox

* Open the about:debugging page, 
* click "This Firefox" (in newer versions of Firefox), 
* click "Load Temporary Add-on", 
* then select any file in your extension's directory.

Source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing

![Install Firefox Extension](doc/install-manually-ff.png "Install Firefox Extension")

### Chrome


* Go to chrome://extensions,
* enable `Developer Mode`,
* click `Load Unpacked`,
* and select the downloaded repository's root folder

![Install Chromw Extension](doc/install-manually-ch.png "Install Chrome Extension")

🥳 Enjoy your twitter feed w/o promotions.

Feel free to raise an issue on Github, if it does not work for you.

