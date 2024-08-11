const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#FF33A1', // Pink
    '#FF8F33', // Orange
    '#33FFF4', // Cyan
    '#8D33FF', // Purple
    '#FFFF33', // Yellow
    '#FF3333', // Dark Red
    '#33FF99', // Light Green
    '#3399FF', // Light Blue
    '#FF6633'  // Coral
];

let colorIndex = 0;

const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    // Change the button's background color
    button.style.backgroundColor = colors[colorIndex];

    // Update the index to the next color
    colorIndex = (colorIndex + 1) % colors.length;
});