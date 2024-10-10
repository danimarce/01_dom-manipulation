// EXERCISE 1: Selecting Elements
// Select the element with the ID 'header' and log it to the console.
let element1 = document.querySelector('#header');
console.log(element1);

// EXERCISE 2: Changing HTML Content
// Change the inner HTML of the element with the ID 'main-content' to contain a <p> tag with the text "Updated Content".
let element2 = document.querySelector('#main-content');
element2.innerHTML = '<p>Updated Content</p>';

// EXERCISE 3: Changing CSS Styles
// Change the background color of the element with the class 'container' to 'lightgreen'.
let element3 = document.querySelector('.container');
element3.style.backgroundColor = 'lightgreen';

// EXERCISE 4: Adding/Removing Classes
// Add a new class called 'active' to the element with the class 'menu'.
// After 2 seconds, remove the class 'active' from the same element.
let element4 = document.querySelector('.menu');
element4.classList.add('active');
setTimeout(function() {
    element4.classList.remove('active');
}, 2000);

// EXERCISE 5: Creating and Appending Elements
// Create a new <button> element with the text 'Click Me'.
// Append this button to the element with the ID 'button-container'.
let newButton = document.createElement('button');
let element5 = document.querySelector('#button-container');
newButton.textContent = 'Click Me';
element5.appendChild(newButton);

// EXERCISE 6: Removing Elements
// Select the element with the class 'advertisement' and remove it from the DOM.
let element6 = document.querySelector('.advertisement');
element6.remove();

// EXERCISE 7: Handling Events
// Add a 'click' event listener to the button created in Exercise 5.
// When clicked, the button should alert "Button Clicked!".
newButton.addEventListener('click', function() {
    alert('Button Clicked!');
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
let input = document.querySelector('#inputField');
let div = document.querySelector('#result');
input.addEventListener('input', function() {
    div.textContent = input.value;
});

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div
let button = document.querySelector('#actionButton');
button.addEventListener('click', function() {
    div.classList.toggle('hidden');
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"
let inputField = document.querySelector('#inputField');
inputField.placeholder = 'Enter your name';
