/* ----------------------------------------
            Testimonial Slider
------------------------------------------- */
const testimonialSlider = () => {
    const carouselOne = document.getElementById('carouselOne');
    carouselOne && carouselOne.addEventListener('slid.bs.carousel', () => {
        const activeItem = carouselOne.querySelector(".active");
        document.querySelector(".js-testimonial-img").src = activeItem ? activeItem.getAttribute("data-js-testimonial-img") : '';
    });
};
testimonialSlider();

/*Button*/

function scrollToElement(params) {
    document.getElementById("click").scrollIntoView({
        behavior: "smooth" 
    })
}