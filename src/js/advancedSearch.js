import { recipeFound } from "./showRecipes.js";
import { ingredientsListTemplate } from "./templates/dropdownTemplate.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
const allIngredients = new Set();

const renderIngredients = () => {
  ingredientsList.innerHTML = recipeFound
    .map((recipe) =>
      recipe.ingredients
        .map((element) => allIngredients.add(element.ingredient.toLowerCase()))
        .join("")
    )
    .join("");

  ingredientsListTemplate(allIngredients);
  console.log(allIngredients);
};

renderIngredients();
