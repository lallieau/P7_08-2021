import { recipeFound } from "./showRecipes.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
// const allIngredients = new Set();
let allIngredientsArray;

const ingredientsListTemplate = (element) => {
  `<li><a class="dropdown-item" href="#">${element}}</a></li>`;
};

const renderIngredients = () => {
  let allIngredients = [];
  console.log(allIngredients.length);
  const test = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  // const test = (array) => {
  //   console.log(array);

  //   return array.reduce((unique, item) => {
  //     return unique.includes(item) ? unique : [...unique, item];
  //   }, []);
  // };

  recipeFound.map(
    (recipe) =>
      recipe.ingredients.map((element) =>
        allIngredients.push(element.ingredient.toLowerCase())
      ),
    console.log(allIngredients)
    // console.log(test([...allIngredients]))
  );
};

renderIngredients();
