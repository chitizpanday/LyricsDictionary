//gathering API Credentials for food Search from edamam
var appId='cdc87a4e';
var appKey = '8a7be31efd6be7e303b00d3e963e0c18';
var key = 'pizza'
var baseURL = `https://api.edamam.com/search?q=${key}&app_id=${appId}&app_key=${appKey}&to=25`;
var displaySearchResults=document.getElementById("displayPictures")


//applying Fetch method to access data from the API

async function fetchData(userInput){
  key = userInput;
  baseURL = `https://api.edamam.com/search?q=${key}&app_id=${appId}&app_key=${appKey}&to=25`;
fetch(baseURL)
.then((response) => {
  return response.json();
})
.then((data) => {
  var generatedHTML = '';
   
     data.hits.map(function(result) {
     generatedHTML+=
    //  console.log(result);
    
  
                 `<div id = "DISPLAY" class="display" >
                <img id="picture" src="${result.recipe.image}">
                <div class="recipeTabs">
                  <div>${result.recipe.label}"</div>
                  <div><a id="viewRecipe" href="${result.recipe.url}" target=_"blank"> View Recipe</a></div>
                  <div>Calories:  ${result.recipe.calories.toFixed(2)}</div>
                </div>`;
                displaySearchResults.innerHTML=  generatedHTML;
  });
  
  });
}

//gathering API Credentials from the Newyork Times
var applicationId='6f3d81b6-bfad-49ed-b46e-b805cc54da80';
var applicationKey = 'QYRw2zwbEnHj7w1ydbnka8cYblkU2I10';
newsURL = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${applicationKey}`


//applying Fetch method to access data from the NewYork Times API

async function fetchNewsData(){
  newsURL = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=QYRw2zwbEnHj7w1ydbnka8cYblkU2I10`
fetch(newsURL)
.then ((response)=>{
  return response.json();
})
.then ((newsData)=>{
  console.log(newsData);
  let generatedHtml = '';
  newsData.results.map(x => {
    generatedHtml +=
    `<div>
      <div>${x.abstract}</div>
      <div>${x.byline}</div>
      <div>${x.created_date}</div>
      <div>${x.url}</div> <br/><br/>
    </div>`;
  })
  document.getElementById("newsHeadlines").innerHTML=generatedHtml;  
})
 }
 fetchNewsData()
 


function searchRecipe(){
  //reflect the searched food item in the recipe search section
var recipeSearch = document.getElementById("recipeItems");
document.getElementById("displayItem").innerHTML= recipeSearch.value;
fetchData(recipeSearch.value);

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


function addGrocery(){
var TODO = document.getElementById("inputField").value;
var jsonTODO = JSON.stringify (TODO);
localStorage.setItem("inputField", jsonTODO);
}




//Displaying Date and Time on the Navbar

function currentTime() {
  var date = new Date();
  var currTime = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = currTime;
}
setInterval(currentTime, 1000);


function currdate() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = today.getDate();
  var currentDate = `${month}-${date}-${year}`;
  document.getElementById("date").innerHTML = currentDate;
}
currdate()