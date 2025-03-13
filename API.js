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
  console.log(data);
  const buttonContainer = document.getElementById("pet-btn");

  data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick='loadAllPetsByCategory(${'category.category'})' class="btn btn-category bg-white flex items-center gap-4 rounded-xl border px-14 py-4 cursor-pointer h-full">
        <img src = "${category.category_icon}" class="w-10 h-8" alt = "" />
        <p class="text-xl font-bold">${category.category}</p>
        </button>
        `;

    buttonContainer.appendChild(div);
  });
};



// load all pets 

const loadAllVideos = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  displayAllVideos(data.pets);
};



const loadAllPetsByCategory = async category => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
    const data = await response.json();
    console.log(data);
};





const displayAllVideos = (data) => {
  console.log(data);
  const allPetsContainer = document.getElementById("all-pets-container");

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
        <img class="h-36 w-full rounded-xl object-cover" src="${pet.image}" alt="" />
        <h3 class="text-xl">${pet.pet_name}</h3>
        <p class="text-sm text-gray-500">Bread:${pet.breed ? pet.breed : 'Not available'}</p>
        <p class="text-sm text-gray-500">Birth:${pet.date_of_birth ? pet.date_of_birth : 'Not available'}</p>
        <p class="text-sm text-gray-500">Gender:${pet.gender ? pet.gender : 'Not available'}</p>
        <p class="text-sm text-gray-500">Prrice:${pet.price ? '$' + pet.price : 'Not available'}</p>
        
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
