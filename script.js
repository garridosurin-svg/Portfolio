// Optional: Change header color on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#222";
    } else {
        header.style.backgroundColor = "#333";
    }
});


