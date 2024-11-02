// Array of font families to cycle through
const fonts = [
    "'Arial', sans-serif",
    "'Courier New', monospace",
    "'Georgia', serif",
    "'Times New Roman', serif",
    "'Verdana', sans-serif",
    "'Tahoma', sans-serif",
    "'Lucida Console', monospace",
    "'Roboto', sans-serif",
    "'Comic Sans MS', cursive"
];

// Function to cycle through fonts
let fontIndex = 0;
setInterval(() => {
    document.getElementById('excuse').style.fontFamily = fonts[fontIndex];
    fontIndex = (fontIndex + 1) % fonts.length; // Loop back to start when reaching the end
}, 500);

// Random excuse generator
const excuses = [
    "I couldn't find my shoes.",
    "My dog ate my homework.",
    "I lost track of time while binge-watching my favorite show.",
    "I thought today was Saturday.",
    "I was abducted by aliens.",
    "My internet was down.",
    "I was not well.",
    "I accidentally locked myself in the bathroom.",
    "I had to take care of a family emergency.",
    "I forgot how to do it.",
    "I was too busy saving the world."
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById('excuse').textContent = excuses[randomIndex];
});
