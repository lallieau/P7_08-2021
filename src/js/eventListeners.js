import {
  renderRecipes,
  renderAdvancedSearch,
  filterName,
  searchFilter,
  recipeFound,
} from "./renderRecipes.js";
import { filterRecipesBySearchText } from "./controller.js";
import { tagListTemplate } from "./templates.js";

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

//
// 1) Vérifier si le texte fait plus de 3 charactères
// 2) Rechercher les recettes correspondant à la recherche
// 3) Afficher les recettes correspondantes
//
searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
  }
  recipeFound = filterRecipesBySearchText(searchFilter);

  return renderRecipes(), renderAdvancedSearch();
});

//
// 1) Ajouter le tag au tableau des filtres
// 2) Rechercher les recettes correspondant à la recherche par tag
// 3) Afficher les tags sélectionnés en dessous de la barre de recherche
// 4) Afficher les recettes correspondantes
//
document.addEventListener("click", (event) => {
  if (event.target.id === "input-ingredients") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        filterName.map(
          (element) =>
            (tagsList.innerHTML = tagListTemplate(element, "ingredients"))
        );
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "input-appliances") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        filterName.map(
          (element) =>
            (tagsList.innerHTML = tagListTemplate(element, "appliances"))
        );
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "input-ustensils") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        filterName.map(
          (element) =>
            (tagsList.innerHTML = tagListTemplate(element, "ustensils"))
        );
      }
    });
  }
});

//
// Afficher la liste des éléments en fonction du texte dans l'input
//

// inputIngredient.addEventListener("input", () => {});
