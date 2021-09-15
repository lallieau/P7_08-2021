const inputIngredient = document.querySelector("#input-ingredients");
const inputAppliance = document.querySelector("#input-appliances");
const inputUstensil = document.querySelector("#input-ustensils");

const ingredientBtn = document.querySelector("#ingredients");
const applianceBtn = document.querySelector("#appliances");
const ustensilBtn = document.querySelector("#ustensils");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

//
// Ouvrir et fermer les dropdown
//

const removeAppliances = () => {
  applianceBtn.classList.remove("expand-the-btn");
  appliancesList.classList.remove("expanded-appliances");
  inputAppliance.placeholder = "Appareils";
};

const removeUstensils = () => {
  ustensilBtn.classList.remove("expand-the-btn");
  ustensilsList.classList.remove("expanded-ustensils");
  inputUstensil.placeholder = "Ustensiles";
};

const removeIngredients = () => {
  ingredientBtn.classList.remove("expand-the-btn");
  ingredientsList.classList.remove("expanded-button");
  inputIngredient.placeholder = " Ingrédients";
};

ingredientBtn.addEventListener("click", () => {
  ingredientBtn.classList.add("expand-the-btn");
  ingredientsList.classList.add("expanded-button");
  inputIngredient.placeholder = "Recherche un ingrédient";

  removeUstensils();
  removeAppliances();
});

applianceBtn.addEventListener("click", () => {
  applianceBtn.classList.add("expand-the-btn");
  appliancesList.classList.add("expanded-appliances");
  inputAppliance.placeholder = "Recherche un appareil";

  removeIngredients();
  removeUstensils();
});

ustensilBtn.addEventListener("click", () => {
  ustensilBtn.classList.add("expand-the-btn");
  ustensilsList.classList.add("expanded-ustensils");
  inputUstensil.placeholder = "Recherche un ustensile";

  removeIngredients();
  removeAppliances();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("#ingredients")) return;
  removeIngredients();

  if (event.target.closest("#appliances")) return;
  removeAppliances();

  if (event.target.closest("#ustensils")) return;
  removeUstensils();
});
