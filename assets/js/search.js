


function fetchRecipe(url) {
    var apiKey = prompt('Enter your API key:');
  
    if (!apiKey) {
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
            console.log(data);
          } else {
            throw new Error(`Error fetching data: ${request.status}`);
          }
        };
        request.send();
      }

      var apiUrl = "https://api.spoonacular.com/recipes/716429/information?apiKey="+apiKey +"&includeNutrition=true";

      fetchRecipe();