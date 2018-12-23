const menuParallax = (() => {
    const discountImg = document.getElementById("discountImg");
    const fnc = () => {
        let offset = window.pageYOffset;
        discountImg.style.backgroundPositionY = offset * .1 + "px";
    }
    return fnc;
})();

 window.addEventListener("scroll", e => {
        e.preventDefault();
        menuParallax();
 })