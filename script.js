//gathering API Credentials
<<<<<<< HEAD
var appId='cdc87a4e';
var appKey = '8a7be31efd6be7e303b00d3e963e0c18';
var key = 'pizza'
var baseURL = `https://api.edamam.com/search?q=${key}&app_id=${appId}&app_key=${appKey}&to=20`;
=======
var appId = "cdc87a4e";
var appKey = "8a7be31efd6be7e303b00d3e963e0c18";
var baseURL = `https://api.edamam.com/search?q=pizza&app_id=${appId}&app_key=${appKey}&to=20`;
>>>>>>> ae7a5df5a375ae32a6a7ea97d9df017468888321

//applying Fetch method to access data from the API
<<<<<<< HEAD

async function fetchData(userInput){
  key = userInput;
  baseURL = `https://api.edamam.com/search?q=${key}&app_id=${appId}&app_key=${appKey}&to=20`;
fetch(baseURL)
.then((response) => {
  return response.json();
})
.then((data) => {
  
  var generatedHTML = '';
   
     data.hits.map(function(result) {
     generatedHTML+=
     console.log(result);
     generatedHTML+=
  
                 `<div id = "DISPLAY" class="display" >
                <img id="picture" src="${result.recipe.image}">
                <div class="recipeTabs">
                  <div>${result.recipe.label}"</div>
                  <div><a id="viewRecipe" href="${result.recipe.url}" target=_"blank"> View Recipe</a></div>
                  <div>Calories:${result.recipe.calories.toFixed(2)}</div>
                </div>`;
                
   
   document.getElementById("DISPLAY").innerHTML=  generatedHTML;
  });
  
  });

  //generateHTML (authors);
}






function generateHTML (data){ 
   var generatedHTML = '';
   
//    data.map(result=> {
//    //generatedHTML+=
//    console.log(result);
//    generatedHTML+=

//                `<div id = "DISPLAY" class="display" >
//               <img id="picture" src="${result.recipe.image}">
//               <div class="recipeTabs">
//                 <div>${result.recipe.label}"</div>
//                 <div><a id="viewRecipe" href="${result.recipe.url}" target=_"blank"> View Recipe</a></div>
//                 <div>Calories:${result.recipe.calories.toFixed(2)}</div>
//               </div>`
//  });
 document.getElementById("DISPLAY").innerHTML=  generatedHTML;
 
}
  
 


function searchRecipe(){
  //reflect the searched food item in the recipe search section
var recipeSearch = document.getElementById("recipeItems");
document.getElementById("displayItem").innerHTML= recipeSearch.value;
fetchData(recipeSearch.value);

=======
fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    searchRecipe(data);
  });

//reflect the searched food item in the recipe search section
var recipeSearch = document.getElementById("recipeItems");
function searchRecipe() {
  document.getElementById("displayItem").innerHTML = recipeSearch.value;
  recipeSearch.value = "";
>>>>>>> ae7a5df5a375ae32a6a7ea97d9df017468888321
}

//populate and store the history of the grocery list
var inputField = document.getElementById("inputField");
var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling"); //paragraph-styling is a reference from CSS
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = " ";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

//save the history of the grocery list in the local storage
if (localStorage.getItem("inputField") !== null) {
  document.getElementById("inputField").innerHTML = JSON.parse(
    localStorage.getItem("inputField")
  );
  console.log(localStorage.getItem("inputField"));
}

<<<<<<< HEAD

function addGrocery(){
var TODO = document.getElementById("inputField").value;
var jsonTODO = JSON.stringify (TODO);
localStorage.setItem("inputField", jsonTODO);
}


=======
function addGrocery() {
  var TODO = document.getElementById("inputField").value;
  var jsonTODO = JSON.stringify(TODO);
  localStorage.setItem("inputField", jsonTODO);
}
>>>>>>> ae7a5df5a375ae32a6a7ea97d9df017468888321
