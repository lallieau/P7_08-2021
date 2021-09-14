const inputIngredient = document.getElementById("input-ingredients");
const inputappliances = document.getElementById("input-appliances");
const inputUstensile = document.getElementById("input-ustensils");
const ingredientsBtn = document.getElementById("ingredients");
const appliancesBtn = document.getElementById("appliances");
const ustensilsBtn = document.getElementById("ustensils");
const ingredientsPlaceholder = document.getElementById(
  "ingredients-placeholder"
);
const appliancessPlaceholder = document.getElementById(
  "appliances-placeholder"
);
const ustensilsPlaceholder = document.getElementById("ustensils-placeholder");
const chevronDowningredients = document.getElementById(
  "chevron-down-ingredients"
);
const chevronUpingredients = document.getElementById("chevron-up-ingredients");
const chevronDownappliances = document.getElementById(
  "chevron-down-appliances"
);
const chevronUpappliances = document.getElementById("chevron-up-appliances");
const chevronDownustensils = document.getElementById("chevron-down-ustensils");
const chevronUpustensils = document.getElementById("chevron-up-ustensils");

//
// Ouvrir les dropdown
//
ingredientsBtn.addEventListener("click", () => {
  ingredientsBtn.classList.add("expand-the-btn");
  ingredientsPlaceholder.classList.add("expanded-button");
  chevronDowningredients.style.display = "none";
  chevronUpingredients.style.display = "block";
  inputIngredient.placeholder = "Recherche un ingrédient";

  appliancesBtn.classList.remove("expand-the-btn");
  appliancessPlaceholder.classList.remove("expanded-appliances");
  chevronDownappliances.style.display = "block";
  chevronUpappliances.style.display = "none";
  inputappliances.placeholder = "Appareils";

  ustensilsBtn.classList.remove("expand-the-btn");
  ustensilsPlaceholder.classList.remove("expanded-ustensils");
  chevronDownustensils.style.display = "block";
  chevronUpustensils.style.display = "none";
  inputUstensile.placeholder = "Ustensiles";
});

appliancesBtn.addEventListener("click", () => {
  appliancesBtn.classList.add("expand-the-btn");
  appliancessPlaceholder.classList.add("expanded-appliances");
  chevronDownappliances.style.display = "none";
  chevronUpappliances.style.display = "block";
  inputappliances.placeholder = "Recherche un appareil";

  ingredientsBtn.classList.remove("expand-the-btn");
  ingredientsPlaceholder.classList.remove("expanded-button");
  chevronUpingredients.style.display = "none";
  chevronDowningredients.style.display = "block";
  inputIngredient.placeholder = " Ingrédients";

  ustensilsBtn.classList.remove("expand-the-btn");
  ustensilsPlaceholder.classList.remove("expanded-ustensils");
  chevronDownustensils.style.display = "block";
  chevronUpustensils.style.display = "none";
  inputUstensile.placeholder = "ustensils";
});

ustensilsBtn.addEventListener("click", () => {
  ustensilsBtn.classList.add("expand-the-btn");
  ustensilsPlaceholder.classList.add("expanded-ustensils");
  chevronDownustensils.style.display = "none";
  chevronUpustensils.style.display = "block";
  inputUstensile.placeholder = "Recherche un ustensile";
});

//
// Fermer les dropdown en cliquant dans le vide
//
document.addEventListener("click", (event) => {
  if (event.target.closest("#ingredients")) return;
  ingredientsBtn.classList.remove("expand-the-btn");
  ingredientsPlaceholder.classList.remove("expanded-button");
  chevronUpingredients.style.display = "none";
  chevronDowningredients.style.display = "block";
  inputIngredient.placeholder = " Ingrédients";

  if (event.target.closest("#appliances")) return;
  appliancesBtn.classList.remove("expand-the-btn");
  appliancessPlaceholder.classList.remove("expanded-appliances");
  chevronDownappliances.style.display = "block";
  chevronUpappliances.style.display = "none";
  inputappliances.placeholder = "Appareils";

  if (event.target.closest("#ustensils")) return;
  ustensilsBtn.classList.remove("expand-the-btn");
  ustensilsPlaceholder.classList.remove("expanded-ustensils");
  chevronDownustensils.style.display = "block";
  chevronUpustensils.style.display = "none";
  inputUstensile.placeholder = "Ustensils";
});

//
// Fermer les dropdown en cliquant sur les chevrons
//
document.addEventListener("click", (event) => {
  if (event.target.id == "chevron-up-ingredients") {
    ingredientsBtn.classList.remove("expand-the-btn");
    ingredientsPlaceholder.classList.remove("expanded-button");
    chevronUpingredients.style.display = "none";
    chevronDowningredients.style.display = "block";
    inputIngredient.placeholder = " Ingrédients";
  }

  if (event.target.id == "chevron-up-appliances") {
    appliancesBtn.classList.remove("expand-the-btn");
    appliancessPlaceholder.classList.remove("expanded-appliances");
    chevronDownappliances.style.display = "block";
    chevronUpappliances.style.display = "none";
    inputappliances.placeholder = "Appareils";
  }

  if (event.target.id == "chevron-up-ustensils") {
    ustensilsBtn.classList.remove("expand-the-btn");
    ustensilsPlaceholder.classList.remove("expanded-ustensils");
    chevronDownustensils.style.display = "block";
    chevronUpustensils.style.display = "none";
    inputUstensile.placeholder = "Ustensiles";
  }
});
