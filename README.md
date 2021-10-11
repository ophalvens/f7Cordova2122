# f7Cordova2122

## Stappen om tot deze versie van de app te komen :
 * framework7-cli cordova installeren
 ```
 npm i framework7-cli -g
 ```
 * aanmaken van de app via de CLI
 ```
 framework7 create --ui
 ```
 * kies in de UI die verschijnt de gewenste opties. 
   De opties staan hieronder beschreven.
 * indien het builden voor jou een foutmelding geeft ivm buildtools 31.0.0, verwijder dan (tijdelijk) buildtools versie 31 in je SDK manager in Android Studio.


## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "C:\\dev\\projecten\\wm\\2122\\f7Corova2122",
  "type": [
    "cordova"
  ],
  "name": "f7Cordova2122",
  "framework": "core",
  "template": "tabs",
  "bundler": false,
  "cssPreProcessor": false,
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": true
  },
  "customBuild": false,
  "pkg": "be.stevenop.f7cordova2122",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-device"
    ]
  }
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `serve` - run development server
* 📱 `build-cordova` - build cordova app
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.





## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```



## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)



* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7