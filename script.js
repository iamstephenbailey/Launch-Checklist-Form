// Write your JavaScript code here!
window.addEventListener("load", function(){
   setDestination();
   //1. fetch data and convert to json (fetch & json chptr)
   //2. modify missontargets innerHTML to reflect template down below (fetch & json studio)
   //3. validate form data (input and forms chptr)
   //4. update flight status based on form data (dom & events studio)
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value == "" || copilotNameInput.value == "" ||
      fuelLevelInput.value == "" || cargoMassInput.value == "") {
         window.alert("All fields are required!");
      }
      else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         window.alert("Please enter a number!");
      } else {
         document.getElementById("pilotStatus").innerText = `Pilot ${pilotNameInput.value} is ready for launch`
         document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotNameInput.value} is ready for launch`
         document.getElementById("faultyItems").style.visibility = "visible"
         shuttleGreen();
      if (fuelLevelInput.value < 10000){
         document.getElementById("fuelStatus").innerText = `There is not enough fuel level for the journey`
         shuttleRed();
      }
      if (cargoMassInput.value > 10000){
         document.getElementById("cargoStatus").innerText = `There is too much mass for the shuttle to take off`
         shuttleRed();
      }
   }
});
});

function shuttleRed(){
   let shuttleStatus = document.getElementById("launchStatus");
   shuttleStatus.innerText = `Shuttle not ready for launch`
   shuttleStatus.style.color = "red"
}

function shuttleGreen(){
   let shuttleStatus = document.getElementById("launchStatus");
   shuttleStatus.innerText = `Shuttle ready for launch`
   shuttleStatus.style.color = "green"
   document.getElementById("fuelStatus").innerText = `Fuel level high enough for launch`
   document.getElementById("cargoStatus").innerText = `Cargo mass low enough for launch`
}

function setDestination(){
   // 1. create a fetch function to request destinations
   // 2.  maybe use .innerhtml on div missionTarget?
   // 3. randomly generate a number
   let planetChoice = Math.floor(Math.random()*6) 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(planetArray){
         let chosenPlanet = planetArray[planetChoice];
         document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${chosenPlanet.name}</li>
            <li>Diameter: ${chosenPlanet.diameter}</li>
            <li>Star: ${chosenPlanet.star}</li>
            <li>Distance from Earth: ${chosenPlanet.distance}</li>
            <li>Number of Moons: ${chosenPlanet.moons}</li>
         </ol>
         <img src="${chosenPlanet.image}">`
      })
   })
}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
