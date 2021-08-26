import { recipesListTemplate } from "./templates/recipesListTemplate.js";
import { noResultTemplate } from "./templates/recipesListTemplate.js";
import { filterRecipesBySearchText, searchFilter } from "./mainResearch.js";

const recipesList = document.querySelector("#list-recipes");
const noResult = document.querySelector(".no-result");

const recipeFound = filterRecipesBySearchText(searchFilter);

const renderRecipes = () => {
  if (recipeFound.length === 0) noResult.innerHTML = noResultTemplate();

  recipesList.innerHTML = recipeFound
    .map((recipe) => recipesListTemplate(recipe))
    .join("");
};

renderRecipes();
