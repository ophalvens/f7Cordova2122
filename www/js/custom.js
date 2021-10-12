// Eigen functies die we op andere plaatsen gaan gebruiken
function showLocation(position) {
    if(app.view.current.router.url == "/locatie/") {
      // success functie
  
      $("#locatieResultaat").html(
        `<p>Latitude: ${position.coords.latitude}</p><p>Longitude: ${position.coords.longitude}</p><p>Accuracy: ${position.coords.accuracy}m.</p><p>Timestamp: ${new Date(position.timestamp)}</p>`
      );
    }
}
  
function positionError(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
    switch(error.code){
        case 0:
            // unknown error
            app.dialog.alert('Onbekend probleem bij het bepalen van je positie. Zorg er voor dat de positiebepaling van je toestel actief is.', 'Positie probleem');
            break;
        case 1:
            // permission denied
            app.dialog.alert('Het spijt me, maar ik ga je moeten blijven pesten als je geen toestemming geeft om je positie te zien. Als je wilt, kan je de pagina herladen en eventueel de geschiedenis van je browser wissen. Het laatste uur is meer dan voldoende. <b>iPhone</b> : zorg er voor dat je locatie toestemming in het algemeen EN locatie toestemming aan Safari geeft.', 'Positie toelating probleem');
            break;
        case 2:
            // position unavailable (error response from location provider)
            app.dialog.alert('Je positie is niet beschikbaar. Zorg er voor dat de positiebepaling van je toestel actief is.', 'Positie niet beschikbaar');
            break;
        case 3:
            // timed out
            app.dialog.alert('Het duurt te lang om je positie te vinden. Zit je in een tunnel? Of zit je nog in de school? Op een heel aantal toestellen kan de positie sneller bepaald worden als je ook je wifi aanzet.', 'Positie timeout');
            break;
    }
}

// ---------- uitbreiding voorbeeld stap-4 gegevens ---------------- //

// De volgende lijn moet je aanpassen zodat de url verwijst naar
// het bestand op jouw server (zie les 2 : php).
var baseApiAddress = "https://stevenop.be/wm/api/";
var opties = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "omit", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body:{}
};

const getList = () => {
    // de producten van de server opvragen en weergeven dmv de alerter functie

    // body data type must match "Content-Type" header
    opties.body = JSON.stringify({
      format: "json"
      //, user : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig 
      //, password : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig
    }); 

    // test de api
    fetch(baseApiAddress + "PRODUCTSget.php", opties)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseData){
        // de verwerking van de data
        var list = responseData.data;

        if (list.length > 0) {
          // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
          let tlines = "";
          for (let i = 0, len = list.length; i < len; i++) {
              tlines += `<div class='row'><span class='col'>${list[i].PR_naam} ( ${list[i].CT_OM} )</span><span class='col'>&euro;${ list[i].PR_prijs}</span><button onClick='verwijderProduct(${list[i].PR_ID});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
          }

          $("#pList").html(tlines);
          
        } else {
          app.dialog.alert("Producten konden niet opgevraagd worden");
        }

      })
      .catch(function(error) {
        // verwerk de fout
        app.dialog.alert("fout : " + error);
      });
  };


function verwijderProduct(PR_ID) {
  // fetch request opzetten om een item te verwijderen.
  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    PR_ID: PR_ID
  });

  fetch(baseApiAddress + "PRODUCTSdelete.php", opties)
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData){
      // de verwerking van de data
      app.dialog.alert("Die zien we nooit meer ... terug!", "Item verwijderd");
      // refresh de lijst
      // getList kunnen we niet van hier uit aanroepen, dus we moeten dit via een omweg doen
      getList();

    })
    .catch(function(error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Item toegevoegd");
    });
}