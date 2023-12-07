// Variables

let goBtn = $('.go-btn');
let searchResult = $('.search-result');
let recipeContainer = $('.recipe-container');
var loadLikedList;
var modal = document.getElementById("myModal");
var btn = document.getElementById("reset-btn");
var span = document.getElementsByClassName("close")[0];
var saveBtn = document.getElementById("save-btn");
var closeBtn = document.getElementById("btn-close");

// Call modal

onload = function() {
  modal.style.display = "block";
  if (localStorage.getItem('apiKey') !== null) {
    modal.style.display = "none";
    document.getElementById('api-key').value = localStorage.getItem('apiKey');
  }
}


// When user clicks button, open modal
btn.onclick = function() {
  modal.style.display = "block";
}



// Close button for modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Save button for modal

saveBtn.onclick = function() {
  localStorage.setItem('apiKey', document.getElementById('api-key').value);
  modal.style.display = "none";
}


// on click for go button
// goBtn.onclick = function() {

// }

// filters toggle
const filterBtn = $('.filter-btn');
const filterContainer = $('.filter-container');


filterBtn.on('click', function () {
  if (filterContainer.css('display') === 'none') {
    filterContainer.css('display', 'flex');
  } else {
    filterContainer.css('display', 'none');
  }
});


// Go button toggle


goBtn.on('click', function () {
  if (searchResult.css('display') === 'none') {
    searchResult.css('display', 'flex');
    recipeContainer.css('display', 'flex');
  } 

  // add function to populate display
  var apiKey = localStorage.getItem('apiKey');
  var request = "https://api.spoonacular.com/recipes/complexSearch?includeNutrition=true&apiKey=" + apiKey;
  request += "&query=" + document.getElementById("search-input").value;
  var filters = [];
  

  //filter logic
  if (document.getElementById("btncheck0").checked) {
    filters.push("Gluten Free");
  }

  if (document.getElementById("btncheck1").checked) {
    filters.push("Vegan");
  }

  if (document.getElementById("btncheck2").checked) {
    filters.push("Vegetarian");
  }

  if (document.getElementById("btncheck3").checked) {
    filters.push("Paleo");
  }

  if (filters.length > 0) {
    request += "&diet=" + filters.join(",");
  }
  

  console.log(request);
  fetchRecipe(request);


});


// parsing recipes into recipe display

function parseRecipes(Recipes) {
  console.log(Recipes);
  var searchResult = [];

  for (let i=0; i < Recipes.length; i++) {
    let recipe = Recipes[i];
    var searchRecipe = Object.create(RecipeItem);
    searchRecipe.id = Recipes[i].id;
    searchRecipe.title = Recipes[i].title;
    searchRecipe.imageURL = Recipes[i].image;
    searchRecipe.URL = "https://spoonacular.com/" + Recipes[i].title.replace(" ", "-") + "-" + Recipes[i].id;
    // console.log(searchRecipe.URL);
    searchResult.push(searchRecipe);
  }
  displayRecipeResult(searchResult);
  registerEventListeners(searchResult, "S");
}

// Save recipe button to local storage

// delete button to remove the parent container of recipe card

