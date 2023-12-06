class RecipeSearchManager {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    this.recipes = document.querySelectorAll('.przepis');
  }

  searchTitles() {
    // Pobierz wprowadzony tekst z pola wyszukiwania
    const searchText = this.searchInput.value.toLowerCase();

    // Iteruj przez przepisy i sprawdź, czy tytuł zawiera wpisany tekst
    this.recipes.forEach((recipe) => {
      const title = recipe.querySelector('.p_title').textContent.toLowerCase();

      // Jeżeli tytuł zawiera wpisany tekst, pokaż przepis, w przeciwnym razie ukryj
      if (title.includes(searchText)) {
        recipe.style.display = 'block';
      } else {
        recipe.style.display = 'none';
      }
    });
  }
}

// Utwórz instancję klasy RecipeSearchManager
const recipeSearchManager = new RecipeSearchManager();

// Dodaj nasłuchiwanie na zmiany w polu wyszukiwania
recipeSearchManager.searchInput.addEventListener('input', () => {
  recipeSearchManager.searchTitles();
});
