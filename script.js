const searchButton = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseButton = document.querySelector("#recipe-close-btn");
const searchHistory = document.querySelector(".search-history-list");

//localStorage.setItem("ingredientSearch");

//handling click on search button

// localStorage.setItem("recipeSearch", ingredientSearch);

// if (localStorage.getItem("recipeSearch") != null) {
//   var historyTmp = localStorage.getItem("recipeSearch");
//   var oldhistoryarray = historyTmp.split("|");

//   for (var i = 0; i < oldhistoryarray.length; i++) {
//     searchHistory.innerHTML = "<p>" + oldhistoryarray[i] + "</p>";
//   }
// }

searchButton.addEventListener("click", getListofMeals(searchedIngredient));

mealList.addEventListener("click", getRecipe);

recipeCloseButton.addEventListener("click", () =>
  mealDetailsContent.parentElement.classList.remove("showRecipe")
);

//function to get the list of meals

function getListofMeals() {
  let ingredientSearch = document.querySelector("#search-input").value.trim();

  fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredientSearch
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let addingHtml = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          addingHtml += ` 
          <div class="meal-item" data-id = "${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe Info</a>
              </div>
          </div>`;
        });
        mealList.classList.remove("foodNotFound");
      } else {
        addingHtml += `<h4>Sorry, no meals can be found by such ingredient.</h4>`;
        mealList.classList.add("foodNotFound");
      }
      mealList.innerHTML = addingHtml;
    });
}

//function to get the recipe of the meal

function getRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    console.log(mealItem.dataset.id);
    fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
        mealItem.dataset.id
    )
      .then((response) => response.json())
      .then((data) => getMealRecipe(data.meals));
  }
}

//function to display recipe in html

function getMealRecipe(meals) {
  meals = meals[0];
  console.log(meals);
  let addedHtml = `<h2 class="recipe-title">${meals.strMeal}</h2>
            <p class="recipe-category">${meals.strCategory}</p>
            <div class="recipe-instruction">
              <h3>Instructions</h3>
              <p>
                ${meals.strInstructions}
              </p>
             
            </div>
            <div class="recipe-meal-img">
              <img src="${meals.strMealThumb}" alt="${meals.strMeal}" />
            </div>
            <div class="recipe-link">
              <a href="${meals.strYoutube}" target="_blank">Watch Tutorial</a>
            </div>`;

  mealDetailsContent.innerHTML = addedHtml;
  mealDetailsContent.parentElement.classList.add("showRecipe");
}
