// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const form = event.target;

    // Process form data here
    console.log('Form submitted:', Object.fromEntries(formData));

    // Clear form fields
    form.reset();

    // Show success message
    alert('Thank you for contacting us!');
}

// Add event listener to the contact form
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', handleSubmit);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Game card functionality (assuming you have game cards)
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        // Open game details in a modal or new page
        console.log(`Opening game details for ${card.querySelector('h3').textContent}`);
        // Implement actual game detail display logic here
    });
});

// Hero section animation
const heroSection = document.getElementById('hero');
if (heroSection) {
    let scrollPosition = window.scrollY;

    function animateHero() {
        if (window.scrollY > heroSection.offsetHeight / 2) {
            heroSection.style.backgroundImage = "linear-gradient(135deg, #f5f5f5 50%, #ffffff 50%)";
            heroSection.style.backgroundSize = "100% 200%";
            heroSection.style.animation = "move 10s linear infinite";
        } else {
            heroSection.style.backgroundImage = "none";
            heroSection.style.backgroundSize = "auto auto";
            heroSection.style.animation = "none";
        }

        requestAnimationFrame(animateHero);
    }

    requestAnimationFrame(animateHero);
}

// Responsive menu toggle
const navMenu = document.querySelector('nav ul');
const navToggle = document.querySelector('nav ul li:last-child a');

function toggleMenu() {
    navMenu.classList.toggle('responsive-menu');
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
}

// Game grid layout adjustment
function adjustGameGrid() {
    const gameGrid = document.getElementById('games');
    if (gameGrid) {
        const windowWidth = window.innerWidth;
        const columnCount = Math.floor(windowWidth / 250);

        gameGrid.style.gridTemplateColumns = `repeat(${columnCount}, minmax(250px, 1fr))`;
    }
}

window.addEventListener('resize', adjustGameGrid);
adjustGameGrid();

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
