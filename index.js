// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
let element1 = document.querySelector('#mainTitle');
console.log(element1);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let element2 = document.querySelector('#content');
element2.innerHTML = '<p>Updated Content</p>';

/// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
let element3 = document.querySelector('#content');
element3.style.backgroundColor = 'lightgreen';

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
let element4 = document.querySelector('#list');
element4.classList.add('active');
setTimeout(function() {
    element4.classList.remove('active');
}, 2000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
let newButton = document.createElement('button');
let element5 = document.querySelector('#content');
newButton.textContent = 'Click Me';
element5.appendChild(newButton);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list
let element6 = document.querySelector('#result');
element6.remove();

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
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
