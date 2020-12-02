const search = document.getElementById('search');
const random = document.getElementById('random');
const submit = document.getElementById('submit');

const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEL = document.getElementById('single-meal');




// function
function searchMeal(e) {
  e.preventDefault();

  single_mealEL.innerHTML = '';


  const term = search.value

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        resultHeading.innerHTML = `<h2>Search resaults for '${term}'</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`
        }
      })
  } else {
    alert('Please enter a search Term')
  }
}





// event listeners
submit.addEventListener('submit', searchMeal)

