// manage spinner

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("main-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("main-container").classList.remove("hidden");
  }
};

//fetch all categories

const loadCategories = () => {
  manageSpinner(true);

  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    });
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
     <li id="plant-list-${category.id}" class=" py-2 rounded-md hover:bg-[#15803D] hover:text-[#fff] plant-list" onclick="loadPlants(${category.id})" >${category.category_name}</li>
    `;
    // append child
    listContainer.appendChild(li);
  }
  manageSpinner(false);
};

// fetch plants by category

const loadPlants = (id) => {
  manageSpinner(true);

  url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeSelected();
      const clickList = document.getElementById(`plant-list-${id}`);
      clickList.classList.add("selected");
      displayPlants(data.plants);
    });
};

// remove class
const removeSelected = () => {
  let plantList = document.querySelectorAll(".plant-list");
  plantList.forEach((item) => {
    item.classList.remove("selected");
  });
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
    <div class="bg-white p-4 rounded-lg text-left ">
            <div>
              <img class=" w-full max-h-[200px] rounded-lg" src=${plant.image} alt="" />
            </div>
            <h5 onclick="loadDetails(${plant.id})" class="my-2 font-semibold tree-name">${plant.name}</h5>
            <div class="h-[80px]"><p class="text-[#00000080] text-xs">
              ${plant.description}
            </p></div>
            <div class="flex justify-between items-center py-3">
              <div class="bg-[#DCFCE7] text-[#15803D] text-sm rounded-3xl px-3 py-1">
                ${plant.category}
              </div>
              <div class="font-bold">৳<span class="tree-price">${plant.price}</span></div>
            </div>
            <button id="cart-btn-${plant.id}" onclick="cartBtn(${plant.id})" class="bg-[#15803D] text-white w-full rounded-3xl py-2">
              Add to Cart
            </button>
          </div>
    `;
    // append child
    plantContainer.appendChild(div);
  }
  manageSpinner(false);
};

loadCategories();

// cart button feature

const cartBtn = (id) => {
  const clickBtn = document.getElementById(`cart-btn-${id}`);
  const parent = clickBtn.parentNode;
  const plantName = parent.querySelector(".tree-name").innerText;
  const plantPrice = parseInt(parent.querySelector(".tree-price").innerText);

  // make alert for click add to cart button

  alert(plantName + " has been added to the cart.");

  // add to cart section

  const cartContainer = document.getElementById("cart-container");

  const div = document.createElement("div");
  div.innerHTML = `
      
      <div
              class="bg-[#F0FDF4] rounded-lg px-3 py-1 flex items-center justify-between mb-2"
            >
              <div>
                <h5 class="font-medium text-sm">${plantName}</h5>
                <p class="text-[#00000080] text-sm mb-2 cart-price">${plantPrice}</p>
              </div>
              <div id="icon-${id}" onclick="removeFromCart(${id})" class="text-[#00000080]">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
      
      `;
  cartContainer.appendChild(div);
  // add  total price to the cart
  const totalPrice = parseInt(document.getElementById("total-price").innerText);

  const newTotalPrice = plantPrice + totalPrice;
  document.getElementById("total-price").innerText = newTotalPrice;
};

// cross icon features

const removeFromCart = (id) => {
  const cartCard = document.getElementById(`icon-${id}`).parentNode;
  cartCard.classList.add("hidden");
  // console.log(cartCard);

  // reduce cart total price
  const cartPrice = parseInt(cartCard.querySelector(".cart-price").innerText);

  const totalPrice = parseInt(document.getElementById("total-price").innerText);
  const newTotalPrice = totalPrice - cartPrice;
  document.getElementById("total-price").innerText = newTotalPrice;
};

// fetch all plants

const loadAllTrees = () => {
  manageSpinner(true);

  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      removeSelected();
      document.getElementById("all").classList.add("selected");
      displayPlants(data.plants);
    });
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
