export let filterName = ["lait", "citron"];

const linkItem = document.querySelectorAll(".dropdown-item");

linkItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    filterName.push(item.textContent);
  })
);
