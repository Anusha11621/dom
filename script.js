// Select the h1 element and store it in a variable named heading.

let h1 = document.querySelector('h1')


// Check the typeof heading and log it.

console.log(typeof(h1)) //object

// Change the color of heading to black.

h1.style.color = 'black'

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs = document.querySelectorAll('hr')
console.log(allHrs) //66

/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray
Array.from converts an array kind of data into array so we can use methods like map, reduce
HINT:
let allHrsArray = Array.from(allHrs)
*/

let allHrsArray = Array.from(allHrs)
console.log(allHrsArray);

// Set the border of the all the hr elements to "1px solid tomato"

let hr = document.querySelectorAll('hr')
for(let i=0;i<hr.length;i++){
  hr[i].style.border = "1px solid tomato"
}

// Change the background of all the hr to "antiquewhite" using for of loop.

let hr1 = document.querySelectorAll('hr')
for(let i=0;i<hr1.length;i++){
  hr1[i].style.backgroundColor = "antiquewhite"
}

// Change the 'border-radius' of all the hr to "5px" using array.

for (let hr of allHrsArray){
  hr.style.borderRadius = "5px"
}

// Change the alignment of the heading(h1) to center.

h1.style.textAlign ="center"

// Change the font size of the heading to 3rem.

h1.style.fontSize ="3rem"

// Change the border of hr with class 'image' to `2px solid purple`.

let image = document.querySelector('.image')
image.style.border = `2px solid purple`

// Hide the box number 17 (last box).

let box17 = document.querySelector('.seventeen')
box17.style.display= "none"

// Change the border of all the hr element from solid to dashed type

for(let el of allHrsArray){
  el.style.border = "dashed"
}

// Create a pragraph element and store it in variable named 'para' using `createElement`

let para = document.createElement('p')

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

para.textContent = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

// Remove all the elements from box 1

let box1 = document.querySelector('.one')
box1.innerHTML = ""


// Replace all the elements inside box 1 with the para (you created above)

box1.append(para)


// Walking the DOM

// Do the following after selecting box 16 and storing in variable named box16
 let box16 = document.querySelector('.sixteen')
  // - Access the parentNode
  box16.parentNode
  // - Access the childNodes
  box16.childNodes
  // - Access previousSibling
  box16.previousSibling
  // - Access nextSibling
  box16.nextSibling
  // - Access firstChild
  box16.firstChild
  // - Access lastChild
  box16.lastChild
  // - Access previousElementSibling
  box16.previousElementSibling
  // - Access nextElementSibling
  box16.nextElementSibling
  // - Access firstElementChild
  box16.firstElementChild
  // - Access lastElementChild
  box16.lastElementChild
  // - Focus on the difference between element and node


// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

let box2 = document.querySelector('.two')
let paragraph = document.createElement('p')
paragraph.textContent = "Append inserts as last child"
box2.append(paragraph)


// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.

let box3 = document.querySelector('.three')
let para1 = document.createElement('p')
para1.textContent = "Prepend inserts as first child"
box3.prepend(para1)


// Change the border of box 4 to '1px solid black'

let box4 = document.querySelector('.four')
box4.style.border = '1px solid black'

// Change the border radius of box 5 to 10px.

let box5 = document.querySelector('.five')
box5.style.border = '10px'

// Change the text color of box 6 to black.

let box6 = document.querySelector('.six')
box6.style.color = 'black'

// Change the font size of the para inside box 1 to 0.8rem.

box1.style.fontSize = '0.8rem'

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue

let datai = document.querySelector('.archive')
let element = datai.children
for(let i=0; i<element.length;i++){
  if(i%2 !== 0){
    element[i].style.backgroundColor = "aliceblue"
  }
}

// add a class named "awesome-box" to the box 6 using classList property of DOM element.

box6.classList.add("awesome-box")
console.log(box6);

// Using the toggle classList property toggle the class `awesome-box` from box 2

box2.classList.toggle('awesome-box')

// Using the remove classList proeprty remove the class `awesome-box` from box 4

box3.classList.remove(`awesome-box`)

// Change the background of the body to bisque

let body = document.querySelector('body')
body.style.backgroundColor = 'bisque'

// Create a button and store it in a variable named 'btn'

let btn = document.createElement('button')

// textContent of the button should be 'Click Me'

btn.textContent = 'Click Me'

// Change the background of the btn to 'oldlace'

btn.style.backgroundColor = 'oldlace'

// Change the font size of the btn to 1rem

btn.style.fontSize = '1rem'

// Change the border of the btn to '1px solid black'

btn.style.border = '1px solid black'

// Add the padding of '0.5rem 1rem' to btn

btn.style.padding = '0.5rem 1rem'

// Append the btn in box number 9

let box9 = document.querySelector('.nine')
box9.append(btn)

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

let img = document.createElement('img');
img.src =
'https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'

// Select the box 7 using class seven

let box7 = document.querySelector('.seven')

// Remove all the elements form box seven

box7.innerHTML = " "

// Append the imgElm to the box no 7

box7.append(img)

// Change the width and height of the image to `100%`

box7.style.height = '100%'
box7.style.width = '100%'

// Select the box 5 using class five


// Create an input element

let input = document.createElement('input')

// Change the placeholder property of the input element to "Enter you email!"

input.placeholder = "Enter you email!"

// Append the input element to the box 5 you selected above

box5.append(input)

// Create two anchor (a) element with  the text of `AltCampus` and `Google`

let AltCampus = document.createElement('a')
let Google = document.createElement('a')

// Change the href property of the anchor elements to `https://www.mountblue.io/` and `https://google.com`

AltCampus.href = "https://www.mountblue.io/"
Google.href = "https://google.com"
AltCampus.textContent = "AltCampus"
Google.textContent = "Google"

// Append both the elements to box 5 you selected above.

box5.appendChild(AltCampus)
box5.append(Google)

