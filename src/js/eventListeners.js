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
// 2) Afficher les tags sélectionnés en dessous de la barre de recherche
// 3) Rechercher les recettes correspondant à la recherche par tag
// 4) Afficher les recettes correspondantes
//

const displayTag = (categoryName) => {
  filterName.map(
    (element) => (tagsList.innerHTML = tagListTemplate(element, categoryName))
  );

  const closeBtn = document.querySelector(".fa-times-circle");
  closeBtn.addEventListener("click", (e) => {
    const currentTagName = e.path[1].innerText.trim();
    const positionIndex = filterName.indexOf(currentTagName);

    filterName.splice(positionIndex, 1);
    e.path[1].outerHTML = "";
  });
};

document.addEventListener("click", (event) => {
  if (event.target.id === "input-ingredients") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        displayTag("ingredients");
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "input-appliances") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        displayTag("appliances");
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "input-ustensils") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        filterName.push(event.target.textContent);
        displayTag("ustensils");
      }
    });
  }
});
