//fetch all categories

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// display categories

const displayCategories = (categories) => {
  // get the parent element
  const listContainer = document.getElementById("cat-list");
  listContainer.innerHTML = "";
  // get all category
  for (let category of categories) {
    // create child element
    const li = document.createElement("li");
    li.innerHTML = `
     <li  onclick="loadPlants(${category.id})" class="py-2 rounded-md hover:bg-[#15803D] hover:text-[#fff]">${category.category_name}</li>
    `;
    // append child
    listContainer.appendChild(li);
  }
};

// fetch plants by category

const loadPlants = (id) => {
  url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

// display plants by category

const displayPlants = (plants) => {
  // get the parent element
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  // get every plant
  for (let plant of plants) {
    // create child
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white p-4 rounded-lg ">
            <div>
              <img class=" w-full max-h-[200px] rounded-lg" src=${plant.image} alt="" />
            </div>
            <h5 onclick="loadDetails(${plant.id})" class="my-2 font-semibold">${plant.name}</h5>
            <div class="h-[80px]"><p class="text-[#00000080] text-xs">
              ${plant.description}
            </p></div>
            <div class="flex justify-between items-center py-3">
              <div class="bg-[#DCFCE7] text-[#15803D] text-sm rounded-3xl px-3 py-1">
                ${plant.category}
              </div>
              <div class="font-bold">৳${plant.price}</div>
            </div>
            <button class="bg-[#15803D] text-white w-full rounded-3xl py-2">
              Add to Cart
            </button>
          </div>
    `;
    // append child
    plantContainer.appendChild(div);
  }
};

loadCategories();
// fetch all plants

const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

// fetch plants details

const loadDetails = (id) => {
  url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.plants));
};

// display plants details

const displayDetails = (details) => {
  console.log(details);

  const plantDetails = document.getElementById("details-container");
  plantDetails.innerHTML = `
          <h3 class="text-lg font-bold">${details.name}</h3>
            <div>
              <img class="my-3 w-full max-h-[250px] rounded-lg" src=${details.image} alt="" />
            </div>
            <p class="font-bold">
              Category: <span class="text-[#00000080]  font-normal">${details.category}</span>
            </p>
            <p class="font-bold my-3">
              Price: <span class="text-[#00000080] font-normal">${details.price}</span>
            </p>
            <p class="font-bold">
              Description: <span class="text-[#00000080] font-normal">${details.description}</span>
            </p>

`;
  document.getElementById("my_modal_5").showModal();
};
