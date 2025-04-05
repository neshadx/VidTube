function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then((data) => displayCategories(data.categories)); 
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => console.log(data)); 
}



function displayCategories (categories) {
    // get the cointainer
    const categoryContainer = document.getElementById ("category-container");
    // loop operation on array of object
    for (let cat of categories) {
        console.log(cat);
        // Create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
           <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        //Append the element
        categoryContainer.append(categoryDiv);
    }
}



loadCategories();
loadCategories();