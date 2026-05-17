function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            setTimeout(() => {
                el.classList.add("active");
            }, 100);
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

window.onload = function () {
    const lang = getCurrentLang();

    // Loader eltüntetése MINDENKÉPPEN
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden-loader");
        }, 800);
    }

    if (sessionStorage.getItem("enteredSite") === "true") {
        const hero = document.getElementById("hero");
        const content = document.getElementById("content");
        if (hero && content) {
            hero.style.display = "none";
            content.classList.remove("hidden");
        }
        applyTranslations(lang);
    }

    revealOnScroll();
};