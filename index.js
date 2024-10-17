// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
let mainTitle = document.querySelector('#mainTitle');
console.log(mainTitle);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let paragraphsList = document.querySelectorAll('p');
paragraphsList[1].innerHTML = '<p>This paragraph has been changed.</p>';

/// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
let firstListItem = document.querySelector('li');
firstListItem.style.color = 'red';

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
let firstParagraph = document.querySelectorAll('p')[0];
firstParagraph.classList.add('highlight');
setTimeout(function() {
    firstParagraph.classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
let newListItem = document.createElement('li');
let list = document.querySelector('#list');
newListItem.textContent = 'Item 4';
list.appendChild(newListItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list
let lastListItem = list.lastElementChild;
lastListItem.remove();

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
let button = document.querySelector('#actionButton');
button.addEventListener('click', function() {
    alert('Button Clicked!');
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
let inputField = document.querySelector('#inputField');
let divResult = document.querySelector('#result');
inputField.addEventListener('input', function() {
    divResult.textContent = inputField.value;
});

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div
let content = document.querySelector('#content');
button.addEventListener('click', function() {
    content.classList.toggle('hidden');
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"
inputField.placeholder = 'Enter your name';
