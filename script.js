const bouton = document.getElementById("theme-toggle");

bouton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        bouton.textContent = "☀️ Mode clair";
    } else {
        bouton.textContent = "🌙 Mode sombre";
    }
});