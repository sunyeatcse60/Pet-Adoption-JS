console.log("I love You Ma");

// load all button
const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  displayCategory(data.categories);
};

const displayCategory = (data) => {
  //   console.log(data);
  const buttonContainer = document.getElementById("pet-btn");

  data.forEach((category) => {
    // console.log(category)
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="btn-${category.category}" onclick = "loadAllPetsByCategory('${category.category}')" class="btn category-btn bg-white flex items-center gap-4 rounded-xl border px-14 py-4 cursor-pointer h-full">
        <img src = "${category.category_icon}" class="w-10 h-8" alt = "" />
        <p class="text-xl font-bold">${category.category}</p>
        </button>
        `;

    buttonContainer.appendChild(div);
  });
};

// load all pets

const loadAllVideos = async () => {
  loadingSpinner(true);

  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  setTimeout(() => {
    displayAllVideos(data.pets);
    loadingSpinner(false);
  }, 2000);
};

// load for each button
const loadAllPetsByCategory = async (category) => {
  // add and remove active button
  removeActiveClass();
  addActiveClass(category);

  // loading spinner
  loadingSpinner(true);

  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${category}`
  );
  const data = await response.json();

  setTimeout(() => {
    displayAllVideos(data.data);
    loadingSpinner(false);
  }, 2000);
};

const displayAllVideos = (data) => {
  //   console.log(data);
  const allPetsContainer = document.getElementById("all-pets-container");

  if (data.length == 0) {
    allPetsContainer.classList.remove("grid");
    allPetsContainer.innerHTML = `
    <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
    <img src="./images/error.webp"
    <h2 class=" text-center text-lg font-bold"> No content hare in this category </h2>
    </div>
    `;
    return;
  } else {
    allPetsContainer.classList.add("grid");
  }

  data.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "flex-col",
      "gap-2",
      "p-4",
      "border",
      "rounded-xl",
      "font-bold"
    );

    div.innerHTML = `
        <img class="h-36 w-full rounded-xl object-cover" src="${
          pet.image
        }" alt="" />
        <h3 class="text-xl">${pet.pet_name}</h3>
        <p class="text-sm text-gray-500">Bread:${
          pet.breed ? pet.breed : "Not available"
        }</p>
        <p class="text-sm text-gray-500">Birth:${
          pet.date_of_birth ? pet.date_of_birth : "Not available"
        }</p>
        <p class="text-sm text-gray-500">Gender:${
          pet.gender ? pet.gender : "Not available"
        }</p>
        <p class="text-sm text-gray-500">Prrice:${
          pet.price ? "$" + pet.price : "Not available"
        }</p>
        
        <hr class="my-2 /">


        <div class="flex justify-between items-center px-2">
        <button class="btn bg-white text-teal-700 rounded-lg py-1 px-4"><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="btn bg-white text-teal-700 rounded-lg py-1 px-4">Adopt</button>
        <button class="btn bg-white text-teal-700 rounded-lg py-1 px-4">Details</button>
        </div>
        `;

    allPetsContainer.appendChild(div);
  });
};

loadCategory();
loadAllVideos();
