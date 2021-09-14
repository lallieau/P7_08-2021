import {
  recipesListTemplate,
  noResultTemplate,
  elementsListTemplate,
} from "./templates.js";

import { filterRecipesBySearchText } from "./controller.js";

const recipesList = document.querySelector("#list-recipes");
const noResult = document.querySelector(".no-result");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

export let filterName = [""];
export let searchFilter = "";
export let recipeFound = filterRecipesBySearchText(searchFilter);

//
// Retourne la liste de toutes les recettes
// en fonction des filtres de recherches (recherche principales, recherche par tag)
//
export const renderRecipes = () => {
  if (recipeFound.length === 0) noResult.innerHTML = noResultTemplate();

  recipesList.innerHTML = recipeFound
    .map((recipe) => recipesListTemplate(recipe))
    .join("");

  renderAdvancedSearch();
};

//
// Retourne la liste des éléments pour chaque catégorie de tri (ingrédients, ustensiles, appareils)
//
export const renderAdvancedSearch = () => {
  let [allIngredients, allAppliances, allUstensils] = [[], [], []];

  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  const displayElements = (allElements) =>
    removeDuplicateElements(allElements)
      .map((element) => elementsListTemplate(element))
      .join("");

  recipeFound.map((recipe) => {
    allAppliances.push(recipe.appliance.toLowerCase());
    recipe.ingredients.map((element) => {
      allIngredients.push(element.ingredient.toLowerCase());
    });
    recipe.ustensils.map((element) => {
      allUstensils.push(element.toLowerCase());
    });
  });

  ustensilsList.innerHTML = displayElements(allUstensils);
  appliancesList.innerHTML = displayElements(allAppliances);
  ingredientsList.innerHTML = displayElements(allIngredients);
};

renderRecipes();
