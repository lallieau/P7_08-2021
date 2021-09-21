import {
  recipesListTemplate,
  noResultTemplate,
  elementsListTemplate,
} from "./templates.js";

import { addTagsEventListeners } from "./eventListeners.js";

const recipesList = document.querySelector("#list-recipes");
const noResult = document.querySelector(".no-result");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

export const renderRecipes = (
  recipes,
  ingredientsSortFilter,
  appliancesSortFilter,
  ustensilsSortFilter
) => {
  if (recipes.length === 0) noResult.innerHTML = noResultTemplate();

  recipesList.innerHTML = recipes
    .map((recipe) => recipesListTemplate(recipe))
    .join("");

  renderAdvancedSearch(
    recipes,
    ingredientsSortFilter,
    appliancesSortFilter,
    ustensilsSortFilter
  );
};

export const renderAdvancedSearch = (
  recipes,
  ingredientsSortFilter,
  appliancesSortFilter,
  ustensilsSortFilter
) => {
  const allIngredients = [];
  const allAppliances = [];
  const allUstensils = [];
  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  const sortFilters = (array, sortFilter) =>
    removeDuplicateElements(
      array.filter((element) =>
        element.includes(sortFilter.toLowerCase().trim())
      )
    );

  const displayElements = (allElements, sortFilter) =>
    sortFilters(allElements, sortFilter)
      .map((element) => elementsListTemplate(element))
      .join("");

  // const displayElementsWithSortFilter = (allElements, sortFilter) =>
  //   sortFilters(allElements, sortFilter)
  //     .map((element) => elementsListTemplate(element))
  //     .join("");
  recipes.map((recipe) => {
    allAppliances.push(recipe.appliance.toLowerCase());
    recipe.ingredients.map((element) => {
      allIngredients.push(element.ingredient.toLowerCase());
    });
    recipe.ustensils.map((element) => {
      allUstensils.push(element.toLowerCase());
    });
  });

  // ingredientsList.innerHTML = displayElementsWithSortFilter(
  //   allIngredients,
  //   ingredientsSortFilter
  // );

  // appliancesList.innerHTML = displayElementsWithSortFilter(
  //   allAppliances,
  //   appliancesSortFilter
  // );

  // ustensilsList.innerHTML = displayElementsWithSortFilter(
  //   allUstensils,
  //   ustensilsSortFilter
  // );

  ingredientsList.innerHTML = displayElements(
    allIngredients,
    ingredientsSortFilter
  );
  appliancesList.innerHTML = displayElements(
    allAppliances,
    appliancesSortFilter
  );
  ustensilsList.innerHTML = displayElements(allUstensils, ustensilsSortFilter);

  addTagsEventListeners();
};
