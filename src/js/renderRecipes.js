import {
  recipesListTemplate,
  noResultTemplate,
  elementsListTemplate,
} from "./templates.js";

const recipesList = document.querySelector("#list-recipes");
const noResult = document.querySelector(".no-result");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

export const renderRecipes = (recipes, sortQuery) => {
  if (recipes.length === 0) noResult.innerHTML = noResultTemplate();

  recipesList.innerHTML = recipes
    .map((recipe) => recipesListTemplate(recipe))
    .join("");

  renderAdvancedSearch(recipes, sortQuery);
};

export const allIngredients = [];
export const allAppliances = [];
export const allUstensils = [];

export const renderAdvancedSearch = (recipes, sortQuery) => {
  const removeDuplicateElements = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  const sortFilters = (array) =>
    removeDuplicateElements(
      array.filter((element) =>
        element.includes(sortQuery.toLowerCase().trim())
      )
    );

  const displayElements = (allElements) =>
    sortFilters(allElements)
      .map((element) => elementsListTemplate(element))
      .join("");

  recipes.map((recipe) => {
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
