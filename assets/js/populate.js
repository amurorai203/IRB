var searchRecipeList = [];
var displaySearchLimit = 5;


function displayRecipeResult(searchResult){

    var searchListContainerElt = $("#searchResult");

    for (let i=0; i<displaySearchLimit && i < searchResult.length; i++){
        var divElt = $("<div>");
        divElt.addClass("card text-white");
        var imgElt = $("<img>");
        imgElt.addClass("card-img rounded-circle");
        imgElt.attr("src", searchResult[i].imageURL);
        divElt.append(imgElt);
        var divcardElt = $("<div>");
        divcardElt.addClass("card-img-overlay");
        var h5Elt = $("<h5>");
        h5Elt.addClass("card-title");
        h5Elt.text(searchResult[i].title);
        divcardElt.append(h5Elt);
        var divButtonElt = $("<div>");
        var buttonElt = $("<button>");
        buttonElt.addClass("btn");
        buttonElt.text("Click to like");
        divButtonElt.append(buttonElt);
        divcardElt.append(divButtonElt);
        divElt.append(divcardElt);
        searchListContainerElt.append(divElt);
    }
}

function loadRecipeBook(){

    var recipeBookElt = $("#recipeBook");

    for (let j=0; j<loadLikedList.length; j++){
        var divColElt = $("<div>");
        divColElt.addClass("col");
        var divCardElt = $("<div>");
        divCardElt.addClass("card");
        var imgElt = $("<img>");
        imgElt.addClass("card-img-top");
        imgElt.attr("src", loadLikedList[j].imageURL);
        divCardElt.append(imgElt);
        var divCardBodyElt = $("<div>");
        divCardBodyElt.addClass("card-body");
        var h5Elt = $("<h5>");
        h5Elt.addClass("card-body");
        h5Elt.text(loadLikedList[j].title);
        divCardBodyElt.append(h5Elt);
        var pElt = $("<p>");
        pElt.addClass("card-text");
        pElt.text(loadLikedList[j].ingredients);
        divCardBodyElt.append(pElt);
        divCardElt.append(divCardBodyElt);
        divColElt.append(divCardElt);
        recipeBookElt.append(divColElt);
    }

}

// This should be replaced by API searched result
searchRecipeList = loadLikedList;
displayRecipeResult(searchRecipeList);
loadRecipeBook();