var searchRecipeList = [];
var displaySearchLimit = 5;


function displayRecipeResult(searchResult){

    var searchListContainerElt = $("#searchResult");

    for (let i=0; i<displaySearchLimit && i < searchResult.length; i++){
        var divElt = $("<div>");
        divElt.addClass("card bg-dark text-white rounded-circle");
        var imgElt = $("<img>");
        imgElt.addClass("card-img");
        imgElt.attr("src", searchResult[i].imageURL);
        divElt.append(imgElt);
        var divcardElt = $("<div>");
        divcardElt.addClass("card-img-overlay");
        var h5Elt = $("<h5>");
        h5Elt.addClass("card-title");
        h5Elt.text(searchResult[i].title);
        divcardElt.append(h5Elt);
        divElt.append(divcardElt);
        searchListContainerElt.append(divElt);
    }
}

// This should be replaced by API searched result
searchRecipeList = loadLikedList;
displayRecipeResult(searchRecipeList);