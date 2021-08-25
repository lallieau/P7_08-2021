import { recipes } from "./recipes.js";
import { recipesListTemplate } from "./templates/recipesListTemplate.js";

const recipesList = document.querySelector("#list-recipes");
const searchInput = document.querySelector(".form-control");
const searchForm = document.querySelector(".form-inline");

const searchParams = new URLSearchParams(window.location.search);
searchParams.append("searchBy", "");
let searchFilter = searchParams.get("searchBy");

const filterRecipesBySearchText = (searchFilter) => {
  const checkIfMatch = (text, search) => {
    const [formattedText, formattedSearch] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
    ];

    return formattedText.includes(formattedSearch);
  };

  return recipes.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkIfMatch(value, searchFilter))
  );
};

const recipeFound = filterRecipesBySearchText(searchFilter);

const renderRecipes = () => {
  recipesList.innerHTML = recipeFound
    .map((recipe) => recipesListTemplate(recipe))
    .join("");
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value.length >= 3) {
    searchParams.set("searchBy", searchInput.value);

    searchFilter = searchParams.get("searchBy");
    recipeFound = filterRecipesBySearchText(searchFilter);
    return renderRecipes();
  }
});

searchInput.addEventListener("change", () => {
  searchParams.set("searchBy", searchInput.value);
  window.location.search = searchParams;

  recipeFound = filterRecipesBySearchText(searchFilter);
  return renderRecipes();
});

renderRecipes();
