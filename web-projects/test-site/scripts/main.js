// "alert" in javascript is a function that pops up a message box
alert("Hello!");

// "const" is a variable that cannot be changed
// ".document" is the document object offered by the browser
// ".querySelector" is a method of the document object, in this case it is a method that returns the first element that matches the specified selector(s)
// ".querySelector" "h1" is a selector that returns the first element that matches the "h1" tag
/*
const myHeading = document.querySelector("h1");
*/

// ".textContent" is a property of the document object that returns the text content of the specified node
/*
myHeading.textContent = "Hello world!";
*/

// typical if else statement in javascript
/*
if (myHeading.textContent === "Hello world!") {
    alert("That's right!");
}
else {
    alert("That's wrong!");
}
*/

// "let" is a variable that can be changed
// ".querySelector" "p" is a selector that returns the first element that matches the "p" tag
let myParagraph = document.querySelector("p");

// ".textContent" is a property of the document object that returns the text content of the specified node
myParagraph.textContent = "This is a paragraph.";

// ".addEventListener" is a method of the document object that attaches an event handler to the specified element
// "click" is the event type -> the event type is the type of event that will trigger the event handler
// "function" is the event handler -> the event handler is the code that will be executed when the event is triggered
/*
document.querySelector("html").addEventListener("click", function() {
    alert("Ouch! Stop poking me!");
});
*/

// typical functions in javascript
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// this would return the result of the function in an alert box
/*
alert(multiply(4, 7));
alert(multiply(20, 20));
alert(multiply(0.5, 3));
*/




// Adding an image changer

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/logo.png") {
        myImage.setAttribute("src", "images/logo2.png");
    }
    else {
        myImage.setAttribute("src", "images/logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};