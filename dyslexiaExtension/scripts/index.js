// Extension: DyslexiaExtension
// File: index.js
// Author: James Gunder Frazier (jgfrazie.github.io)
// DlM: 12/17/2023
// DESC: Controls the flow of the extension as a whole. Will automatically set the dyslexia-friendly font for the
//       webpage elements. It also ensures all fonts are at least 12px in size. To toggle the dyslexia font and
//       the font-size changer, press ctrl+\ (control key and backslash key) to toggle the extension.
// OUTSIDE SOURCES: https://fonts.google.com/specimen/Lexend

// Event listener function to toggle the extension.
// @param (e): Event of a keydown.
// @side-effect: Toggles the existance of the 'dysFriendlyFont' class on all elements of the 
function toggleFont(e) {
    if (e.ctrlKey && e.code == 'Backslash') {
        console.log("Dyslexia Extension Toggled");
        $('*').toggleClass('dysFriendlyFont');
    }
}

// Will not execute the body of the function until the document has loaded
$(document).ready(function () {     
    console.log("Script is operational"); // Sanity check to see extension loads

    // Injects required linking to style reference sheet for Google Font
    $('head').append('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">');
    $('*').toggleClass('dysFriendlyFont'); // Initial toggling of the dyslexia class
    document.addEventListener('keydown', toggleFont); // Adds an event listener which makes the functionality of toggling the extension on and off
    console.log("DONE WITH SETUP"); // Verification that the extension has fully loaded.
   });
