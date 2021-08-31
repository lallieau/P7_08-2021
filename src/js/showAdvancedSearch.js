import { recipeFound } from "./showRecipes.js";
import { elementsListTemplate } from "./templates/dropdownTemplate.js";

const ingredientsList = document.querySelector("#dropdownMenu1");
const appliancesList = document.querySelector("#dropdownMenu2");
const ustensilsList = document.querySelector("#dropdownMenu3");

const showAdvancedSearch = () => {
  let allIngredients = [];
  let allAppliances = [];
  let allUstensils = [];

  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  const displayElements = (allElements) =>
    removeDuplicateElements(allElements)
      .map((element) => elementsListTemplate(element))
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

  const url = window.location.href;

  ustensilsList.innerHTML = displayElements(allUstensils, url);
  appliancesList.innerHTML = displayElements(allAppliances, url);
  ingredientsList.innerHTML = displayElements(allIngredients, url);
};

showAdvancedSearch();
