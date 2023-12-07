var dataStoreHistory = "searchHistory";
var dataStoreLikedList = "savedLike";
var datetformatter = "YYYYMMDDHHmmss";
var loadedHistory = JSON.parse(localStorage.getItem(dataStoreHistory));
var loadLikedList = JSON.parse(localStorage.getItem(dataStoreLikedList));

// variable to save the search history
const searchHistoryItem = {
    datetime: "00:00",
    criteria: [""]
}

// variable to save one recipe item
const RecipeItem = {
    datetime: "00:00",
    id: 0,
    title: "",
    imageURL: "",
    URL: "",
    ingredients: ""
}

// function to load the search history

function loadHistory(){
    if (loadedHistory == null){
        loadedHistory = [];
    }
}


// function to save the search history
function saveHistory(saveItem){
    loadedHistory.push(saveItem);
    localStorage.setItem(dataStoreHistory, JSON.stringify(loadedHistory));
}


// function to load the recipe book
function loadRecipe(){
    if (loadLikedList == null){
        loadLikedList = [];
    }
}

// function to save the recipe book
function saveRecipe(likedRecipe){
    if (loadLikedList == null){
        loadLikedList = [];
    }
    loadLikedList.push(likedRecipe);
    localStorage.setItem(dataStoreLikedList, JSON.stringify(loadLikedList));
    
}

// function to invalidate layout
function init(){

    loadHistory();
    loadRecipe();

}

init();

