function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then((data))
}
function displayCategories (categories) {
    
}



loadCategories();