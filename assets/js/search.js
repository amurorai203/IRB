var apiKey = prompt('Enter your API key:');
var queryURL = "https://api.spoonacular.com/recipes/complexSearch";
var apiUrl = "https://api.spoonacular.com/recipes/complexSearch?query=pasta"+"&includeNutrition=true"+"&apiKey="+apiKey;

function fetchRecipe() {


  console.log(apiUrl);

  if (!apiKey) {
    console.error('Please enter a valid API key');
    return;
  }

  const headers = {
    'Authorization': `Bearer ${apiKey}`
  };

  fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => console.log(data))
    // .catch(error => console.error('Error fetching recipe:', error));
}
      // var request = new XMLHttpRequest();
      // request.open('GET', url, true);
      // request.setRequestHeader('Authorization', `Bearer ${apiKey}`);
      // request.onload = function() {
      //   if (request.status === 200) {
      //       var data = JSON.parse(request.responseText);
      //       console.log(data);
      //     } else {
      //       throw new Error(`Error fetching data: ${request.status}`);
      //     }
      //   };
      //   request.send();
      // }

      

       fetchRecipe(apiUrl);