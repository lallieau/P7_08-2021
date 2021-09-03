import { renderRecipes, renderAdvancedSearch } from "./renderRecipes.js";
import { filterRecipesBySearchText } from "./controller.js";

const filterName = [""];
let searchFilter = "";
export let recipeFound = filterRecipesBySearchText(searchFilter, filterName);

const searchInput = document.querySelector(".form-control");
const linkItems = document.querySelectorAll(".dropdown-item");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
  }
  recipeFound = filterRecipesBySearchText(searchFilter, filterName);

  return renderRecipes(), renderAdvancedSearch();
});

// Ne fonctionne pas, car n'existe pas encore --> trouver le bon endroit pour l'appeler
// console.log(linkItems);
linkItems.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    filterName.push(item.textContent);
  })
);
