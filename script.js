// Création de la fonction général
function geoLocP1() {
  // Récupération de la division "button1Div"
  let button1Div = document.querySelector(".button1Div");
  // Récupération du bouton "button1"
  let button1 = document.querySelector(".button1");
  // Création de mes paragraphes contenant ma latitude et ma longitude
  let pLatitude = document.createElement("p");
  let pLongitude = document.createElement("p");
  // Création de l'évenement du bouton "button1"
  button1.addEventListener("click", function () {
    // Création de la fonction callback
    function success(position) {
      // Assignation de la valeur
      pLatitude.innerText = `Votre latitude est: ${position.coords.latitude}`;
      pLongitude.innerText = `Votre longitude est: ${position.coords.longitude}`;
      // Apparition du paragraphe dans la division "button1Div"
      button1Div.appendChild(pLatitude);
      button1Div.appendChild(pLongitude);
    }
    // Création de la localisation
    navigator.geolocation.getCurrentPosition(success);
  });
}

function geoLocP2() {
  // Récupération de la division button2Div
  let button2Div = document.querySelector(".button2Div");
  // Récupération du bouton "button2"
  let button2 = document.querySelector(".button2");

  // Création de l'event avec un click sur le bouton "button2"
  button2.addEventListener("click", function () {
    // Activation de la localisation en récupérant les données dans le paramètres "position"
    navigator.geolocation.getCurrentPosition(function (position) {
      localStorage.setItem("@longitude", position.coords.longitude);
      localStorage.setItem("@latitude", position.coords.latitude);
      alert("Votre position a bien été sauvegardée");
    });
  });
}

function geoLocP3() {
  // Récupération de la div "button3Div"
  let button3Div = document.querySelector(".button3Div");
  // Récupération du bouton "button3"
  let button3 = document.querySelector(".button3");

  /* Création des deux paragraphes Longitude / Latitude */

  let pLongitudeSaved = document.createElement("p");
  let pLatitudeSaved = document.createElement("p");

  //Création de l'évenement sur le bouton "button3"
  button3.addEventListener("click", function () {
    let latitude = localStorage.getItem("@latitude");
    let longitude = localStorage.getItem("@longitude");
    if (
      !localStorage.getItem("@latitude") &&
      !localStorage.getItem("@longitude")
    ) {
      pLatitudeSaved.innerText = "Vous n'avez aucune position sauvegardé";
      button3Div.appendChild(pLatitudeSaved);
    } else {
      // Assignation des valeurs de chaques paragraphes
      pLatitudeSaved.innerText = ` Votre dernière latitude sauvegardé est : ${latitude}`;
      pLongitudeSaved.innerText = ` Votre dernière longitude sauvegardé est : ${longitude}`;

      button3Div.appendChild(pLongitudeSaved);
      button3Div.appendChild(pLatitudeSaved);
    }
  });
}
function geoLocP4() {
  // Récupération de la division "button4Div"
  let button4Div = document.querySelector(".button4Div");
  // Récupération du bouton "button4"
  let button4 = document.querySelector(".button4");

  // Créer l'évenement qui se déclenche au clique du bouton "button4"
  button4.addEventListener("click", function () {
    // Si on confirme le window.confirm alors sa supprime
    if (window.confirm("Voulez vous vraiment réinitialiser votre position")) {
      // Suppression des localStorage avec les clefs "@longitude" et "@latitude"
      localStorage.removeItem("@longitude");
      localStorage.removeItem("@latitude");
      // Alert de confirmation de suppression
      alert("Votre position a bien été réinitialiser");
      // Rechargement de la page grâce au location.reload
      location.reload();

      return; // Arrêt de la condition grâce au return
    }
  });
}

geoLocP1();
geoLocP2();
geoLocP3();
geoLocP4();
