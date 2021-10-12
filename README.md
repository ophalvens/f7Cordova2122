# f7Cordova2122

---
<details>
<summary>Stap 1</summary>

# Stap 1

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
</details>
<details>
<summary>Stap 2</summary>

# Stap 2

## 'Barebones' Framework7-app

In deze branch zijn een aantal bestanden en opties verwijderd, zodat we een meer 'lege' app hebben, vanwaar we kunnen opbouwen.

### Verwijderd 
 * in index.html
   * right panel
   * het icoontje om de right panel te openen :
     * id="view-home" > class="page" > class="navbar navbar-large" > class="navbar-inner" > ```div class="right"```
   * commentaar
   * content ivm een popup, panels, login-scherm  
 * de pages die we niet willen gebruiken verwijderd
   * plus die pages verwijderd uit ```routes.js```


### Aangepast 
 * Wat placeholders toegevoegd.
 * Een paar aanpassingen zodat de 'Home', 'Locatie' en 'Data' zichtbaar zijn in ```index.html```.
 * Een paar icoontjes :
   * https://framework7.io/icons/  -> F7 icons
   * https://material.io/resources/icons/?style=baseline -> MD icons
 * In app.js
   * De login scherm code (we hebben die verwijderd uit de html)
 * In routes.js
   * ```routes.js``` aanpassen voor de toegevoegde/verwijderde bestanden

## Toegevoegde bestanden
 * gegevens.html
 * locatie.html
</details>

<details>
<summary>Stap 3</summary>

# Stap 3
## Locatie toevoegen
 *  de locatie plugin toevoegen met 
 ```
 cordova plugin add cordova-plugin-geolocation
 ```
 Je voert dit uit in de map cordova in jouw project.

 Meer informatie over deze plugin vind je op : https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html



## 3 Nieuwe functies toegevoegd 
  * **showPosition** : toont details van je positie wanneer een positie object returned (*app.js*)
  * **positionError** : toont een boodschap indien er een fout is met de locatie (*app.js*)
  * **getLocatie** 
    * start de watch van de positie (*locatie.html*)
    * zie de link tussen **@click** en de methods in dit script

Test als je kan de app op je eigen toestel via het npm script:
```
build-run-cordova
```
Dit gaat er van uit dat je dit hebt toegevoegd aan een van de vorige stappen in de presentatie.

Als je niet op je eigen toestel kan testen start je eerst de emulator op voordat je de `build-run-cordova`

Enkele caveats :

* Test eerst of je emulator wel kan opstarten
* Op sommige versies van je emulator moet je
  * in het virtuele toestel de developers options unlocken
  * USB debugging aanzetten (SETTINGS > DEVELOPER OPTIONS)
  * toestemming geven aan je computer wanneer je virtuele toestel een melding geeft ivm het toestaan van adb toegang naar jouw computer

</details>

# Stap 4
## Gegevens opvragen


* Let op de ```content-security-policy``` in ```index.html``` : jouw domein moet daar in staan of requests gaan daar niet geraken.

* **`/www/`**
  * de code van je Cordova project
* Deze code gaat uit van een API met de structuur zoals we die hebben gezien in de vorige lessen.
  In dit voorbeeld wordt gewerkt met de API op mijn domein. Pas deze instructies aan naar het domein en de locatie van jouw API

### Geen php bestanden in je Cordova app
Een php pagina wordt enkel verwerkt als die vanop een webserver met php wordt bevraagd. Hoewel er in het voorbeeld 2 php bestanden in de map `/php` zitten, maken deze bestanden geen deel uit van je Cordova project.

### Je eigen server
Hoewel je met het voorbeeld van de les kan werken, wil je waarschijnlijk met je eigen code experimenteren voor jouw project.

* Vervang `https://stevenop.be` in:
  * `index.html`
  * `custom.js`

### PHP code
In de map `php` vind je 2 extra bestanden als toevoeging aan de API die we gezien hebben :
* `php/PRODUCTSadd.php` -> een product toevoegen
* `php/PRODUCTSdelete.php` -> een product verwijderen

Als je deze delen nog niet had uitgewerkt voor de vorige oefeningen, kan je deze bestanden
gebruiken. 


---
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