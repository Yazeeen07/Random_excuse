const excuses = [
    "I couldn't find my shoes.",
    "My dog ate my homework.",
    "I lost track of time while binge-watching my favorite show.",
    "I thought today was Saturday.",
    "I was abducted by aliens.",
    "My internet was down.",
    "I accidentally locked myself in the bathroom.",
    "I had to take care of a family emergency.",
    "I forgot how to do it.",
    "I was too busy saving the world."
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById('excuse').textContent = excuses[randomIndex];
});
