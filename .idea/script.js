window.onload = function (){
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");
    if (hour < 12){
        greeting.textContent = "Good morning!";
    }else if (hour < 18){
        greeting.textContent ="Good afternoon!";
    }else {
        greeting.textContent ="Good evening!";
    }
};
const translations = {
    en: {
        "welcome": "Welcome to NeoNetSpace",
        "services": "Our Services",
        "about": "About Us",
        "contact": "Contact",
    },
    de: {
        "welcome": "Willkommen bei NeoNetSpace",
        "services": "Unsere Dienstleistungen",
        "about": "Über Uns",
        "contact": "Kontakt",
    }
};
let currentLang = 'en';
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });
    document.querySelector(".lang-btn").textContent = `🌐 ${lang === "en" ? "English" : "Deutsch"}`;
}
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");
    let greetingKey;
    if (hour < 12) greetingKey ="greeting_morning";
    else if (hour < 18) greetingKey = "greeting_afternoon";
    else greetingKey = "greeting_evening";
    greeting.textContent = translations[currentLang][greetingKey];
}
document.querySelectorAll(".lang-options a").forEach(link=> {link.addEventListener("click", (e) => {e.preventDefault();
    changeLanguage(e.target.getAttribute("data-lang"));
});
});
document.addEventListener("DOMContentLoaded", updateGreeting);