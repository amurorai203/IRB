
// API call

var apiKey = localStorage.getItem('apiKey');
function fetchRecipe(url) {
    
    if (apiKey.length < 32 || apiKey == null) {
      console.error('Please enter a valid API key');
      return;
    }

    var headers = {
        'Authorization': `Bearer ${apiKey}`
      };
    
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.setRequestHeader('Authorization', `Bearer ${apiKey}`);
      request.onload = function() {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            parseRecipes(data.results);
          } else {
            throw new Error(`Error fetching data: ${request.status}`);
          }
        };
        request.send();
      }