"use strict";

// function to count and display the number of characters
function displayCount() {

    let userStr = document.getElementById('word').value;

    let count = "Your input has XX characters (not including spaces).";
    let newUserStr = "";
    let newCount = "";

    if(count.includes('XX')) {
        newUserStr = userStr.split(" ").join("");  // remove space to count only letters
        newCount = count.replace('XX', `${newUserStr.length}`);
        
    }
    
    let elPhrase = document.getElementById('phrase');
    elPhrase.textContent = userStr;
    let elCount = document.getElementById('count');
    elCount.textContent = newCount;
}