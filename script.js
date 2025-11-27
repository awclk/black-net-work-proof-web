/* --- Javascript --- */

// 1. AOS Animation Initialize
AOS.init({
    duration: 1000, 
    once: true, 
    offset: 100 
});


// 2. Music Control (නිවැරදි කරන ලද කොටස)
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

// Volume set
bgMusic.volume = 0.5;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> Play Music'; 
        isPlaying = false;
    } else {
        // User clicked the button, so the browser allows playing.
        bgMusic.play().then(() => {
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music'; 
            isPlaying = true;
        }).catch(error => {
            // This catch block is mostly for fallback in case the path is wrong.
            console.error("Error playing audio:", error);
            alert("Music file not found or browser error."); 
        });
    }
});

// *සටහන: මෙහිදී Page Load වන විට ස්වයංක්‍රීයව Play වීමට තිබූ කේතය ඉවත් කර ඇත.*
// *සංගීතය ධාවනය වීමට දැන් 'Play Music' බොත්තම ක්ලික් කළ යුතුය.*


// 3. Proof Data 
const proofData = [
    {
        id: 101,
        title: "Game Account Recovery Service",
        description: "Successfully retrieved a lost account for a customer with high security.",
        image: "https://source.unsplash.com/random/400x300/?gaming,computer",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 102,
        title: "Remote Software Installation",
        description: "Installed necessary software remotely and optimized system performance.",
        image: "https://source.unsplash.com/random/400x300/?code,screen",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 103,
        title: "Digital Product Delivery #450",
        description: "Emailed the ordered digital product within 10 minutes of payment confirmation.",
        image: "https://source.unsplash.com/random/400x300/?email,digital",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 104,
        title: "Custom Order Processing",
        description: "Currently processing a special custom order for bulk virtual assets.",
        image: "https://source.unsplash.com/random/400x300/?processing,work",
        status: "Pending",
        statusType: "status-pending"
    }
];

// 4. Rendering Data to HTML
const proofContainer = document.getElementById('proof-container');

function loadProofs() {
    proofData.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('proof-card');
        
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString()); 

        card.innerHTML = `
            <div class="proof-img-box">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="proof-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="status-badge ${item.statusType}">${item.status}</span>
            </div>
        `;
        proofContainer.appendChild(card);
    });
}

// Execute on load
loadProofs();

// 5. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '15px 5%';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '20px 5%';
    }
});
