let rightSection = document.querySelector("main .container > .r-section");
let leftSection = document.querySelector("main .container > .l-section");
let textContent = leftSection.firstElementChild;
// make the right section appears after the text when the user in mobile
const afterLeftSection = _ => leftSection.after(rightSection);
const afterTextContent = __ => textContent.after(rightSection);
let screenWidth = window.innerWidth;
if (screenWidth >= 768) {
    afterLeftSection();
} else {
    afterTextContent();
}
// make the right section appears after the text when the user in pc and he resize the window
window.onresize = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
        afterLeftSection();
    } else {
        afterTextContent();
    }
}


