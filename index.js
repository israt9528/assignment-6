//fetch all categories

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// display categories
const displayCategories = (categories) => {
  console.log(categories);
  // get the parent element
  const listContainer = document.getElementById("cat-list");
  listContainer.innerHTML = "";
  // get all category
  for (let category of categories) {
    // create child element
    const li = document.createElement("li");
    li.innerHTML = `
     <li class='py-3'>${category.category_name}</li>
    `;
    // append child
    listContainer.appendChild(li);
  }
};

loadCategories();
// fetch all plants

const all = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
