const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
    if (isOpen) {
        navLinks.classList.add("close");
        navLinks.addEventListener(
            "animationend",
            (e) => {
                navLinks.classList.remove("open");
                navLinks.classList.remove("close");
            },
            { once:true }
        );
    } else {
        navLinks.classList.add("open");
    }
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal().reveal(".header_container .section_subheader", {
    ...scrollRevealOption,
});
scrollReveal().reveal(".header_container .section_header", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header_container .scroll_btn", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header_container .header_socials", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
});

scrollReveal().reveal(".about_image-1, .about_image-3", {
    ...scrollRevealOption,
    origin: "right",
});
scrollReveal().reveal(".about_image-2", {
    ...scrollRevealOption,
    origin: "left",
});
scrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    delay: 1500,
});
scrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay: 2000,
});