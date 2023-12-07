var searchRecipeList = [];
var displaySearchLimit = 5;
var loadLikedList;
var displayDatetimeFormat = "D[th] MMMM, YYYY";


function displayRecipeResult(searchResult){

    var searchListContainerElt = $("#searchResult");
    searchListContainerElt.empty();
    for (let i=0; i<displaySearchLimit && i < searchResult.length; i++){
        var divElt = $("<div>");
        divElt.addClass("card text-white");
        var aElt = $("<a>");
        aElt.attr("href", searchResult[i].URL);
        aElt.attr("target", "_blank");
        var imgElt = $("<img>");
        imgElt.addClass("rounded-circle card-img" + i);
        imgElt.attr("src", searchResult[i].imageURL);
        aElt.append(imgElt);
        divElt.append(aElt);
        var divcardElt = $("<div>");
        divcardElt.addClass("card-img-overlay");
        var h5Elt = $("<h5>");
        h5Elt.addClass("card-title title" + i);
        h5Elt.text(searchResult[i].title);
        divcardElt.append(h5Elt);
        var divButtonElt = $("<div>");
        var buttonElt = $("<button>");
        buttonElt.addClass("btn");
        buttonElt.text("Click to like");
        buttonElt.attr("id", "like" + i);
        divButtonElt.append(buttonElt);
        divcardElt.append(divButtonElt);
        divElt.append(divcardElt);
        searchListContainerElt.append(divElt);
        
    }
}

function loadRecipeBook(){

    var recipeBookElt = $("#saved-recipes-container");
    recipeBookElt.empty();
    var storedLikedRecipes = JSON.parse(localStorage.getItem("savedLike"));
    loadLikedList = storedLikedRecipes;

    // console.log(storedLikedRecipes);

    if (storedLikedRecipes == null){
        return;
    }

    for (let j=0; j<storedLikedRecipes.length; j++){
        var divColElt = $("<div>");
        divColElt.addClass("col");
        var divCardElt = $("<div>");
        divCardElt.addClass("card");
        var imgElt = $("<img>");
        imgElt.addClass("card-img-top");
        imgElt.attr("src", storedLikedRecipes[j].imageURL);
        divCardElt.append(imgElt);
        var divCardBodyElt = $("<div>");
        divCardBodyElt.addClass("card-body");
        var h5Elt = $("<h5>");
        h5Elt.addClass("card-body");
        h5Elt.text(storedLikedRecipes[j].title);
        divCardBodyElt.append(h5Elt);
        var pElt = $("<p>");
        pElt.addClass("card-text");
        pElt.text(storedLikedRecipes[j].ingredients);
        divCardBodyElt.append(pElt);

        var saveAtElt = $("<h5>");
        saveAtElt.text("Saved at:");
        divCardBodyElt.append(saveAtElt);

        var timeElt = $("<h6>");
        timeElt.addClass("card-time");
        timeElt.text(dayjs(storedLikedRecipes.datetime).format(displayDatetimeFormat));
        divCardBodyElt.append(timeElt);

        var divButtonElt = $("<div>");
        var buttonElt = $("<button>");
        buttonElt.addClass("btn");
        buttonElt.text("Click to dislike");
        buttonElt.attr("id", "dislike" + j);
        divButtonElt.append(buttonElt);
        divCardElt.append(divButtonElt);
        divCardElt.append(divCardBodyElt);
        divColElt.append(divCardElt);
        recipeBookElt.append(divColElt);
        // console.log(storedLikedRecipes[j]);
    }

}

// This should be replaced by API searched result
searchRecipeList = JSON.parse(localStorage.getItem(dataStoreLikedList));

if (searchRecipeList != null){
    displayRecipeResult(searchRecipeList);
}
loadRecipeBook();


function invalidateLayout () {
    var recipeContainer = document.getElementById("saved-recipes-container");
    recipeContainer.innerHTML = "";
  }
  
  function generateLayout () {
    loadLikedList = JSON.parse(localStorage.getItem("savedLike"));
    invalidateLayout();
    loadRecipeBook();
    registerEventListeners(loadLikedList, "L");
    // console.log(loadLikedList);
  }


  function registerEventListeners (inList, inType) {

  if (inList != null) {

    for (var i = 0; i < inList.length ; i++) {
      if (inType == "S"){
        var saveRecipeBtn = document.getElementById("like" + i);
        if (saveRecipeBtn != null){
          saveRecipeBtn.onclick = (event) =>  {
            var likeID = event.srcElement.id.substr(4);
              var recipe = inList[likeID];
              var LikeRecipeItem = Object.create(RecipeItem);
              LikeRecipeItem.datetime = dayjs().format(datetformatter);
              LikeRecipeItem.id = recipe.id;
              LikeRecipeItem.title = recipe.title;
              LikeRecipeItem.imageURL = recipe.imageURL;
              LikeRecipeItem.URL = recipe.URL;
              LikeRecipeItem.ingredients = recipe.extendedIngredients;
              saveRecipe(LikeRecipeItem);
              loadRecipeBook();
          }
        }
      } else{
        var saveRecipeBtn = document.getElementById("dislike" + i);
        if (saveRecipeBtn != null){
          saveRecipeBtn.onclick = () =>  {
            console.log("Trigger dislike " + i);
            // Dislike logic 


          }
        }
      }
    }
  }
}
  
  generateLayout();