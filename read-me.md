### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: the differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll are:

1. getElementById: GetElementById on selects one element by its id and give one single element.

2. getElementsByClassName: GetElementsByClassName selects all the element with class and return a list.

3. querySelector: QuerySelector finds the first element that matches a CSS selector.

4. querySelectorAll: querySelectorAll selects all elements that matches a CSS selector.


### 2. How do you create and insert a new element into the DOM?
Ans: To create and insert a new element into the DOM, you first make the element using document.createElement() then add a content to it, and finally place it into the page by attaching it to an existing parent element.

### 3. What is Event Bubbling? And how does it work?
Ans: Event bubbling means when an event happens on an element, it first runs on that element, then “bubbles up”,means it goes upwards to its parent, then to the parent’s parent, and so on. All the way to the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. 
Event delegation lets a parent element listen for events on its children, saving resources and making your code more dynamic and efficient.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:The difference between preventDefault() and stopPropagation() methods are:

1. preventDefault() Stops the default browser action associated with an event.

1. stopPropagation() Stops the event from bubbling any further up or down the DOM.



