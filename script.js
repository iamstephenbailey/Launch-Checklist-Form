// Write your JavaScript code here!
window.addEventListener("load", function(){
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
      if (pilotNameInput.value === "" || copilotNameInput.value === "" ||
      fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please enter a number!");
      }
   });
});

document.getElementById("pilotStatus").innerHTML + ${pilotNameInput.value}
document.getElementById("copilotStatus").innerHTML + ${pilotNameInput.value}
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
