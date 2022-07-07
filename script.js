
var appId='cdc87a4e';
var appKey = '8a7be31efd6be7e303b00d3e963e0c18';
var baseURL = `https://api.edamam.com/search?q=pizza&app_id=${appId}&app_key=${appKey}`;

fetch (`https://api.edamam.com/search?q=pizza&app_id=${appId}&app_key=${appKey}`)
.then(function(response){
return response.json();
})
.then(function(data){
   console.log(data);
searchRecipe(data)
})




//reflect the searched food item in the recipe search section
var recipeSearch = document.getElementById("recipeItems");
function searchRecipe(){
document.getElementById("displayItem").innerHTML= recipeSearch.value
}




//populate and store the history of the grocery list 
var inputField = document.getElementById("inputField");
var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");

addToDoButton.addEventListener('click', function(){
var paragraph = document.createElement('p');
paragraph.innerText=inputField.value;
toDoContainer.appendChild(paragraph);
})




//save the history of the grocery list in the local storage
