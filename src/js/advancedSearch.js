import { recipeFound } from "./showRecipes.js";
import { ElementsListTemplate } from "./templates/dropdownTemplate.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
const appliancesList = document.querySelector("#dropdownMenu2");
const ustensilsList = document.querySelector("#dropdownMenu3");

const renderIngredients = () => {
  let allIngredients = [];
  let allAppliances = [];
  let allUstensils = [];

  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  const displayElements = (allElements) =>
    removeDuplicateElements(allElements)
      .map((element) => ElementsListTemplate(element))
      .join("");

  recipeFound.map((recipe) => {
    allAppliances.push(recipe.appliance);
    recipe.ingredients.map((element) => {
      allIngredients.push(element.ingredient.toLowerCase());
    });
    recipe.ustensils.map((element) => {
      allUstensils.push(element);
    });
  });

  ustensilsList.innerHTML = displayElements(allUstensils);
  appliancesList.innerHTML = displayElements(allAppliances);
  ingredientsList.innerHTML = displayElements(allIngredients);
};

renderIngredients();
