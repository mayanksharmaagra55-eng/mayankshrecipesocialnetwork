/* Like button function */
function likeRecipe(button) {
    let text = button.innerText;      // Get button text
    let count = parseInt(text.replace("Like", "").trim()); // Get number
    count++;                          // Increase count
    button.innerText = "Like " + count;
}

/* Search recipe function */
function searchRecipes() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let recipes = document.getElementsByClassName("recipe-item");

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        /* Show matching recipes */
        if (title.includes(input)) {
            recipes[i].style.display = "block";
        } else {
            recipes[i].style.display = "none";
        }
    }
}