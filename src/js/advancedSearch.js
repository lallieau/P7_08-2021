import { recipes } from "./recipes.js";
import { recipeFound } from "./showRecipes.js";
import { ingredientsListTemplate } from "./templates/dropdownTemplates.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
const appliancesList = document.querySelector("#dropdownMenu2");
const ustensilsList = document.querySelector("#dropdownMenu3");

const renderIngredients = () => {
  let allIngredients = [];
  let allAppliances = [];
  let allUstensils = [];

  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  recipeFound.map((recipe) => {
    recipe.ingredients.map((element) => {
      allIngredients.push(element.ingredient.toLowerCase());
    });

    allAppliances.push(recipe.appliance);

    recipe.ustensils.map((element) => {
      allUstensils.push(element);
    });
  });

  ustensilsList.innerHTML = removeDuplicateElements(allUstensils)
    .map((element) => ingredientsListTemplate(element))
    .join("");

  appliancesList.innerHTML = removeDuplicateElements(allAppliances)
    .map((element) => ingredientsListTemplate(element))
    .join("");

  ingredientsList.innerHTML = removeDuplicateElements(allIngredients)
    .map((element) => ingredientsListTemplate(element))
    .join("");
};

renderIngredients();
