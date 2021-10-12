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