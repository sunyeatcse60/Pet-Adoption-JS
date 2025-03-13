
const loadingSpinner = (show) => {
    const spinner = document.getElementById('loader');

    if(show){
        spinner.classList.remove('hidden');
        document.getElementById("all-pets-container").innerHTML = ' ' ;
    }
    else{
        spinner.classList.add('hidden');
    }
};