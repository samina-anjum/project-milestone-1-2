"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("toggleButton");
    const skillsSection = document.getElementById("skillsSection");
    toggleButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
