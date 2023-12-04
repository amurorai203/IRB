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

