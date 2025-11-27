/* --- Javascript --- */

// 1. AOS Animation Initialize කිරීම
AOS.init({
    duration: 1000, // ඇනිමේෂන් එකේ වේගය
    once: true, // එක පාරක් පමණක් ඇනිමේට් වීම
    offset: 100 /* ඇනිමේට් වීමට පටන් ගන්නා දුර */
});


// 2. පසුබිම් සංගීතය පාලනය (Music Control)
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> Play Music';
        isPlaying = false;
    } else {
        // බ්‍රව්සර් එකෙන් අවසර ඉල්ලමින් Play කිරීම
        bgMusic.play().then(() => {
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
            isPlaying = true;
        }).catch(error => {
            console.log("Audio play blocked by browser policy. User interaction needed first.");
            alert("කරුණාකර වෙබ් අඩවිය සමඟ සම්බන්ධ වන්න (Click anywhere first).");
        });
    }
});

// උත්සාහ කරන්න ස්වයංක්‍රීයව play කිරීමට
window.addEventListener('load', () => {
     bgMusic.volume = 0.5; // ශබ්දය 50%
     bgMusic.play().then(() => {
         isPlaying = true;
         musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
     }).catch(() => {
         console.log("Autoplay blocked. User needs to click play.");
     });
});


// 3. වැඩ සාක්ෂි දත්ත (Backend Data Simulation)
// නව වැඩ එකතු කිරීමට මෙම කොටස Edit කරන්න.
const proofData = [
    {
        id: 101,
        title: "Game Account Recovery",
        description: "පාරිභෝගිකයෙකුගේ නැතිවූ ගිණුමක් සාර්ථකව නැවත ලබා දීම.",
        image: "https://source.unsplash.com/random/400x300/?gaming,computer",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 102,
        title: "Software Installation Service",
        description: "දුරස්ථව (Remote) සම්බන්ධ වී අවශ්‍ය මෘදුකාංග ස්ථාපනය කර දීම.",
        image: "https://source.unsplash.com/random/400x300/?code,screen",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 103,
        title: "Digital Product Delivery #450",
        description: "ඇණවුම් කළ ඩිජිටල් භාණ්ඩය විනාඩි 10ක් ඇතුලත ඊමේල් කිරීම.",
        image: "https://source.unsplash.com/random/400x300/?email,digital",
        status: "Completed",
        statusType: "status-completed"
    },
    {
        id: 104,
        title: "Custom Order Processing",
        description: "විශේෂ ඇණවුමක් සඳහා කටයුතු කරමින් පවතී.",
        image: "https://source.unsplash.com/random/400x300/?processing,work",
        status: "Pending",
        statusType: "status-pending"
    }
];

// 4. දත්ත HTML වෙත ඇතුලත් කිරීම (Rendering)
const proofContainer = document.getElementById('proof-container');

function loadProofs() {
    proofData.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('proof-card');
        // ඇනිමේෂන් එකක් එකතු කිරීම (Scroll කරන විට මතුවීමට)
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString()); // එකින් එක පමා වී මතුවීමට

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

// පිටුව Load වූ පසු ක්‍රියාත්මක වන්න
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
