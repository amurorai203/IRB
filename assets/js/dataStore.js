var dataStoreHistory = "searchHistory";
var dataStoreLikedList = "savedLike";
var datetformatter = "YYYYMMDDHHmmss";
var loadedHistory = JSON.parse(localStorage.getItem(dataStoreHistory));
var loadLikedList = JSON.parse(localStorage.getItem(dataStoreLikedList));

const searchHistoryItem = {
    datetime: "00:00",
    criteria: [""]
}

const RecipeItem = {
    datetime: "00:00",
    id: 0,
    title: "",
    imageURL: "",
    URL: "",
    ingredients: ""
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
    loadRecipe();

}

function addMockData(){
    // var historyItem = Object.create(searchHistoryItem);
    // historyItem.datetime = dayjs().format(datetformatter);
    // historyItem.criteria = ["bread", "butter", "egg", "toast"];
    // saveHistory(historyItem);

    var historyItem = Object.create(searchHistoryItem);
    historyItem.datetime = dayjs().format(datetformatter);
    historyItem.criteria = ["fish", "lemon"];
    saveHistory(historyItem);

    // var LikeRecipeItem = Object.create(RecipeItem);
    // LikeRecipeItem.datetime = dayjs().format(datetformatter);
    // LikeRecipeItem.id = 716429;
    // LikeRecipeItem.title = "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs";
    // LikeRecipeItem.imageURL = "https://spoonacular.com/recipeImages/716429-556x370.jpg";
    // LikeRecipeItem.url = "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html";
    // LikeRecipeItem.ingredients = "flour, green onions, non-fat milk, olive oil, onion, parmesan cheese, parsley, tubular pasta, peas";
    // saveRecipe(LikeRecipeItem);

    var LikeRecipeItem = Object.create(RecipeItem);
    LikeRecipeItem.datetime = dayjs().format(datetformatter);
    LikeRecipeItem.id = 665527;
    LikeRecipeItem.title = "Yellow Squash Noodles with Tomato Basil Sauce";
    LikeRecipeItem.imageURL = "https://spoonacular.com/recipeImages/665527-312x231.jpg";
    LikeRecipeItem.url = "https://www.foodista.com/recipe/PTQSXRCL/yellow-squash-noodles-with-tomato-basil-sauce";
    LikeRecipeItem.ingredients = "squash noodles, olive oil, roma tomatoes, garlic, sun-dried tomatoes, basil leaves";
    saveRecipe(LikeRecipeItem);
}

init();
// addMockData();
