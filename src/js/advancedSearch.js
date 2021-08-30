import { recipeFound } from "./showRecipes.js";
import { ingredientsListTemplate } from "./templates/dropdownTemplates.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
const allIngredients = new Set();
const iterator = allIngredients.values();

const renderIngredients = () => {
  // let allIngredients = [];

  const test = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  ingredientsList.innerHTML = recipeFound
    .map((recipe) =>
      recipe.ingredients.map((element) => {
        // console.log(element.ingredient.toLowerCase()),
        allIngredients.add(element.ingredient.toLowerCase()),
          // console.log(allIngredients),
          console.log(iterator.next().value);
      })
    )
    .join("");
};
renderIngredients();
