// Variables

let goBtn = $('.go-btn');
let searchResult = $('.search-result');
let recipeContainer = $('.recipe-container');


// Call modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("reset-btn");
var span = document.getElementsByClassName("close")[0];

// When user clicks button, open modal
btn.onclick = function() {
  modal.style.display = "block";
}


// Save button for modal
var saveBtn = document.getElementById("save-btn");
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


// 

function parseRecipes(Recipes) {
  console.log(Recipes);
  for (let i=0; i < Recipes.length; i++) {
    let recipe = Recipes[i];


    if (recipe !== undefined) {
      let recipeTitle = document.getElementById("title" + i);
      let recipeImage = document.getElementById("card-img" + i);

      recipeTitle.innerHTML = recipe.title;
      recipeImage.src = recipe.image;
    }

    if (i === 4) {
      break;
    }

  }
}

// Save recipe button
