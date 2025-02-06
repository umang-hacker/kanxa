const messages = [
    "Are you sure Kalu?",
    "Really sure Bebo??",
    "Are you positive Kanxa?",
    "Pukuli please...",
    "Just think about it Junkiri!",
    "If you say no, I will be really sad Bandrey...",
    "I will be very sad bebo...",
    "I will be very very very sad hai Kanxa...",
    "Ok fine, I will stop asking...",
    "Just kidding pukuli, say yes please! 💗"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}