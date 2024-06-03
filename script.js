// Smoothing for auto scroll
document.querySelectorAll('nav ul li button').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.textContent.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Header scroll function
window.onscroll = function() {stickyHeader()};

const header = document.querySelector('header');
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Button animation
document.querySelectorAll('nav ul li button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = e.target;
        target.classList.add('clicked');

        setTimeout(() => {
            target.classList.remove('clicked');
        }, 600); // Duration of the animation
    });
});
