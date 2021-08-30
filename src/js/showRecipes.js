import {
  recipesListTemplate,
  noResultTemplate,
} from "./templates/recipesListTemplate.js";
import { filterRecipesBySearchText, searchFilter } from "./mainResearch.js";

const recipesList = document.querySelector("#list-recipes");
const noResult = document.querySelector(".no-result");

export let recipeFound = filterRecipesBySearchText(searchFilter);

const showRecipes = () => {
  if (recipeFound.length === 0) noResult.innerHTML = noResultTemplate();

  recipesList.innerHTML = recipeFound
    .map((recipe) => recipesListTemplate(recipe))
    .join("");
};

showRecipes();
