let noCount = 0;

// These are the questions that appear when she clicks "No"
const romanticQuestions = [
    "Are you really sure? 🥺",
    "Think about how cute we are! ❤️",
    "But look at that smile! 🌹",
    "I'll give you all the chocolates... 🍫",
    "Last chance to change your mind! 💖"
];

function handleNo() {
    const noBtn = document.getElementById('noBtn');
    const questionText = document.getElementById('question');
    const yesBtn = document.getElementById('yesBtn');

    if (noCount < 5) {
        // Change the text to a romantic/persuasive question
        questionText.innerText = romanticQuestions[noCount];
        
        // Make the Yes button bigger each time to "nudge" her
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 12) + "px";
        yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).padding) + 5) + "px";
        
        noCount++;
    } else {
        // After the 5th "No", it triggers the Yes screen automatically
        handleYes();
    }
}

function handleYes() {
    const container = document.getElementById('main-card');
    
    // This replaces the whole card with your success message and the second photo
    container.innerHTML = `
        <h1 class="success-text">I knew you'd say yes! ❤️</h1>
        <div class="image-container">
            <img src="IMG-20250913-WA0024.jpg" alt="Our cozy moment" class="fade-in">
        </div>
        <div class="final-message-container">
            <p class="final-message">
                From graduation days to quiet moments like this, 
                every second with you is my favorite. 
            </p>
            <p class="final-message">
                Thank you for being my Valentine (even if I didn't 
                really give you a choice 😉). I love you so much!
            </p>
            <p class="date-stamp">✨ Valentine's Day 2026 ✨</p>
        </div>
    `;
}
