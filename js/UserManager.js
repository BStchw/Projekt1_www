// Klasa do zarządzania logowaniem i danymi użytkownika
class UserManager {
    constructor() {
        this.username = null;
    }

    login(username, password) {
        // Prosta weryfikacja danych logowania (pseudo logika)
        if (username === "user" && password === "pass") {
            // Zapisz nazwę użytkownika
            this.username = username;
            window.location.href = "user.html";
        } else {
            alert("Błąd logowania. Sprawdź nazwę użytkownika i hasło.");
        }
    }

    getLoggedInUsername() {
        return this.username;
    }
}

// Utwórz instancję klasy UserManager
const userManager = new UserManager();

// Funkcja wywołująca metodę login z klasy UserManager
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    userManager.login(username, password);
}