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
const goBtn = $('.go-btn');
const searchResult = $('.search-result');
const recipeContainer = $('.recipe-container');

goBtn.on('click', function () {
  if (searchResult.css('display') === 'none') {
    searchResult.css('display', 'flex');
    recipeContainer.css('display', 'flex');
  } 
  // add function to populate display
});


// Save recipe button
