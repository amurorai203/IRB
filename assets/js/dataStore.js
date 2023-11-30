var dataStoreHistory = "searchHistory";
var dataStoreLikedList = "savedLike";
var datetformatter = "YYYYMMDDHHmmss";
var loadedHistory = JSON.parse(localStorage.getItem(dataStoreHistory));
var loadLikedList = JSON.parse(localStorage.getItem(dataStoreLikedList));

const searchHistoryItem = {
    datetime: "00:00",
    criteria: [""]
}

const likedRecipe = {
    datetime: "00:00",
    id: 0,
    title: "",
    imageURL: "",
    URL: ""
}

function loadHistory(){
    if (loadedHistory == null){
        loadedHistory = [];
    }
}

function saveHistory(saveItem){
    loadedHistory.push(saveItem);
    localStorage.setItem(dataStoreHistory, JSON.stringify(loadedHistory));
}

function loadRecipe(){
    if (loadLikedList == null){
        loadLikedList = [];
    }
}

function saveRecipe(likedRecipe){
    loadLikedList.push(likedRecipe);
    localStorage.setItem(dataStoreLikedList, JSON.stringify(loadLikedList));
}

function init(){

    loadHistory();
    var historyItem = Object.create(searchHistoryItem);
    historyItem.datetime = dayjs().format(datetformatter);
    historyItem.criteria = ["bread", "butter", "egg", "toast"];
    saveHistory(historyItem);

    loadRecipe();
    var LikeRecipeItem = Object.create(likedRecipe);
    LikeRecipeItem.datetime = dayjs().format(datetformatter);
    LikeRecipeItem.id = 654959;
    LikeRecipeItem.title = "Pasta With Tuna";
    LikeRecipeItem.imageURL = "https://spoonacular.com/recipeImages/654959-312x231.jpg";
    LikeRecipeItem.url = "https://api.spoonacular.com/recipes/654959/ingredientWidget.json?apiKey=";
    saveRecipe(LikeRecipeItem);

}

// init();