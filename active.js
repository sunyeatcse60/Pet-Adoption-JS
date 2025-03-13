
const removeActiveClass = () => {
    const allPetsButton = document.getElementsByClassName('category-btn');
    console.log(allPetsButton);
};



const addActiveClass = (category) => {
const btnActive = document.getElementById(`btn-${category}`);
console.log(btnActive)
// btnActive.classList.remove('rounded-xl');
// btnActive.classList.add('bg-emerald-100','border-teal-700','border-2','rounded-full');
};