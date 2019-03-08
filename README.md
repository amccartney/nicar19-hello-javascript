
## Hello to Javascript

Part one of a three-part introduction to D3 at NICAR 2019

## Getting started

Go to the `hello-javascript` folder and open up the file called `main.js` in your favorite text editor. Type the following into the file, hit save, then refresh your web page.

```js
console.log("Hello world!");
```
You should see `Hello world!` printed in your console.

## Manipulating the DOM

JavaScript acts in the webpage by manipulating the Document Object Model (DOM). The DOM is complicated, but it's essentially the structure created by the HTML you write. 

If you go into `index.html` you'll see that there's a `div` with `id = "hello"`. We can use JavaScript to select that `div` and change its contents.

```js
var container = document.getElementById("hello");
container.innerHTML = "Hello!";
```

## Variables

Variables store data. They can store numbers, strings, objects, dates, booleans and the output of functions, among other things.

```js
var myNum = 3;

var myString = "cat";

var myBool = true;

var today = new Date();


console.log(myString); // cat

```

You can then operate on these variables any way you like. A couple examples:

#### String concatenation

```js

var firstName = "Allison"
var lastName = "McCartney"

console.log("My name is " + firstName + " " + lastName); // My name is Allison McCartney
```

#### Mathematical operations

```js
var pi = 3.14159
var radius = 5

var diameter = radius * 2 // 10

var area = pi * Math.pow(radius, 2) // 78.53975
```

## Cool, but aren't we here to make charts?

Yes! Let's talk about data.


## Arrays and objects

The two most common ways you will store data in javascript is with arrays and objects. 

An array is simply a list of things (strings, numbers, objects or even other arrays) between square brackets.

```js
var numbers = [1,2,3,4,5]
var animals = ["dogs","cats","ferrets","fish","hamsters"]
```

You can access the items inside an array by their index number. Indexes always start at zero

```js
animals[1] // cats
```

A javascript object is defined by a key/value structure inside curly brackets.

```js
var person = {
    "name": "Michael",
    "job": "CEO",
    "num_children": 1,
    "quote": "I don't know what I expected."
}
```

You can access the values of an object by using the correct key, using either a dot or brackets and quotes

```js
person.name // Michael
// This is the same as person["name"]
```

## Functions

A function in JavaScript is a block of code that performs a task. Functions are great because make repeatable tasks less verbose. Functions return values that can be used in other parts of your code.

Here's a simple function to determine the area of a circle:

```js
function getArea(radius) {
    var pi = 3.14159

    return pi * Math.pow(radius, 2)
}

getArea(7) // 153.93791
getArea(10) // 314.159
```

## What the heck is JSON

JSON, pronounced jay-sahn, is a type of data file. Not unlike excel or CSV, it is a syntax for storing and exchanging data. It is made up of a combination of arrays and objects

Say you have a spreadsheet that looks like this:

| name    | job      | num_children | quote                                     |
|---------|----------|--------------|-------------------------------------------|
| Michael | CEO      | 1            | I don't know what I expected.             |
| GOB     | Magician | 1            | I've made a huge mistake.                 |
| Lindsay | Activist | 1            | It's vodka. It goes bad once it's opened. |
| Buster  | Army     | 0            | I'm a monster!                            |

The JavaScript equivalent of this spreadsheet would be:

```json
[
    {
        "name": "Michael",
        "job": "CEO",
        "num_children": 1,
        "quote": "I don't know what I expected."
    },{
        "name": "GOB",
        "job": "Magician",
        "num_children": 1,
        "quote": "I've made a huge mistake."
    },{
        "name": "Lindsay",
        "job": "Activist",
        "num_children": 1,
        "quote": "It's vodka. It goes bad once it's opened."
    },{
        "name": "Buster",
        "job": "Army",
        "num_children": 0,
        "quote": "I'm a monster!"
    }
]
```

### So why use JSON when I can just use a spreadsheet? 

Because JSON supports "nested" data, which allows for more freedom when representing complex data.

```json
{
    "name": "GOB",
    "job": "Magician",
    "children": [
        {
            "name": "Steve",
            "job": "Pest control",
            "quote": "Steve Holt!"
        }
    ],
    "quotes": [
        "I've made a huge mistake.",
        "Come on!",
        "They're laughing with me!"
    ]
}
```

## *For* loops

You will use many `for` loops when working with data. For loops allow you to iterate through data in order to operate on it.

Copy the following and paste it into your `main.js`

```js
var bluths = [
    {
        "name": "Michael",
        "job": "CEO",
        "num_children": 1,
        "quote": "I don't know what I expected."
    },{
        "name": "GOB",
        "job": "Magician",
        "num_children": 1,
        "quote": "I've made a huge mistake."
    },{
        "name": "Lindsay",
        "job": "Activist",
        "num_children": 1,
        "quote": "It's vodka. It goes bad once it's opened."
    },{
        "name": "Buster",
        "job": "Army",
        "num_children": 0,
        "quote": "I'm a monster!"
    }
];

bluths.forEach(function(bluth) { 
    console.log(bluth.name); 
});
```
Save your file and hit refresh on your browser window. Check your console, and you should see the four names printed out on separate lines. 

There are probably 10 different ways to write a `for` loop in JavaScript but this is my favorite because it's very explicit about what it's doing. It is also the best way to iterate through lists. What it literally means is for each object in our object list, perform this function or code block. 

Later, we will look at how to iterate through attributes of an object.


## *If* statements

These are conditional statements. It means they will do different actions based on whether a statement is evaluated as true or false. 

```js
bluths.forEach(function(bluth) {
    
    if (bluth.num_children > 0) {
        console.log(bluth.name + " has children")
    } else {
        console.log(bluth.name + " does not have children")
    }
})
```

## Putting it all together 

So far we've learned what JavaScript and the DOM are, variables, objects and loops. This is an extremely narrow snippet of what JavaScript can do, but these are basic concepts that you'll use all the time as you dive deeper into programming. 

To get you ready for the next couple of classes in this series, we're going to write a loop that cycles through our data, and arranges it into a table on the page.

In your `index.html` file, paste this code just underneath `<div id="hello"></div>`:

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Children</th>
            <th>Quote</th>
        </tr>
    </thead>
    <tbody id="bluth-table">
        <!-- Your table rows will go here -->
    </tbody>
</table>
```

Save and refresh your browser. You should see some table headers on your page.

Next, paste this code into your `main.js`:

```js
var tbody = document.getElementById('bluth-table');

bluths.forEach(function(bluth) { 
    var tableRow = tbody.insertRow(-1);
    for (i in bluth) {
        var tableCell = tableRow.insertCell(-1);
        tableCell.innerHTML = bluth[i];
    }
});
```

This doesn't look like a ton of code, but trust me, it's doing *a lot*. Save and refresh your page. You should see a table there with all of the Bluths. Let's walk through what happened step-by-step.

First, we create a `tbody` variable. This grabs the `tbody` element with the `bluth-table` ID so we can talk to it later when we want to add our table rows to it.

```js
var tbody = document.getElementById('bluth-table')
```

This line starts the for loop just like we did above. For each item in the list of bluths, perform this function (task) on that item.

```js
bluths.forEach(function(bluth) { 
```
Then we create another variable `tableRow`. This creates a new line for each person.

```js
var tableRow = tbody.insertRow(-1);
```

Wat. Another `for` loop *within* a for loop?! You betcha another `for` loop! And this one looks different because instead of looping through items in a list, this time we're looping through the attributes within our object. 

So the first time this loop runs it's grabbing the name, the job, the number of children, and the quote.

```js
for (i in bluth) {
```

For all of the attributes we're looping through, we make another variable for the table cells where our bluth data points will live. This line of code tells the DOM to find where we made our table row in the first loop a couple of steps back, and to insert a new table cell. 

That `(-1)` is just special to this particular `insertCell()` method and means that we want the table cell to be added to the end. This is something I'd never seen before and had to Google. We're learning together!

```js
var tableCell = tableRow.insertCell(-1);
```

This is where we tell our table what exactly we want to add. First, we tell the DOM to grab the `tableCell` we created a second ago. Next, that `innerHTML` preps it for whatever text or HTML snippet we want to stick in there. In this case, we want to add the data in our object. 

Now for a little bit of JavaScript magic. We get this data by getting the object we're looping and telling it to grab the data inside with `[i]`. Square brackets next to an object is a JavaScript convention that indicates we want to break into that object and grab the data inside.

```js
tableCell.innerHTML = bluth[i];
```

🎉

--------------

## Bonus round! Functions

We briefly talked about functions above. Let's talk more about them. To refresh: A function in JavaScript is a block of code that performs a task. A function won't happen unless we "call" it.

#### But that's weird, why wouldn't I just write the code I want to happen when I want it to happen?

There's a concept in programming called DRY which stands for Don't Repeat Yourself. Functions allow us to write reusable blocks of code that we can use later rather than writing them out over and over again. For instance, what if we had two data sets we needed to create tables for?

Copy and paste this new `plants` variable just underneath our `bluths` variable.

```js
var plants = [
    {
        "Name": "Cyclamen",
        "Type": "flower",
        "Description": "Pink, downward-facing flowers",
    },
    {
        "Name": "Jalepeno",
        "Type": "pepper",
        "Description": "Long, green peppers",
    },
    {
        "Name": "Haworthia",
        "Type": "succulent",
        "Description": "Dark green, spiky succulent with white stripes",
    },

]
```

First thing, let's get our `index.html` file ready for a new table. Paste this just below our first table:

```html
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tbody id="plant-table">
    </tbody>
</table>
```

That sets up a new table with correct headers and a `<tbody>` with an ID of `plant-table` so our code knows what to look for.

## Your first function

We're going to transform our table making code into something we can use for whatever data we have. Swap out this code that we wrote earlier in our `main.js`:

```js
var tbody = document.getElementById('bluth-table');

bluths.forEach(function(bluth) { 
    var tableRow = tbody.insertRow(-1);
    for (i in bluth) {
        var tableCell = tableRow.insertCell(-1);
        tableCell.innerHTML = bluth[i];
    }
});
```

for this new code:

```js
function tableMaker(id, data) {
    var tbody = document.getElementById(id);

    data.forEach(function(obj) { 
        var tableRow = tbody.insertRow(-1);
        for (i in obj) {
            var tableCell = tableRow.insertCell(-1);
            tableCell.innerHTML = obj[i];
        }
    });
}
```

Then, at the very bottom, we'll call our function. First for `bluths`, then for `plants`

```js
tableMaker('bluth-table', bluths);
tableMaker('plant-table', plants);
```

Save, and look at your browser. Refresh your `index.html`. Did it work?

## Wait, what just happened?

Let's walk through line-by-line.

## Functions, parentheses and parameters, oh my 😬:

```js
function tableMaker(id, data) {
```

This first step is probably the most important part. It establishes that we're about to write a function, names the function (in this case, `tableMaker`) and tells the function what information to expect. We call whatever we put in the parentheses parameters. Before, when our code looked like this:

```js
var tbody = document.getElementById('bluth-table')

bluths.forEach(function(obj) { 
    var tableRow = tbody.insertRow(-1);
    for(i in obj){
        var tableCell = tableRow.insertCell(-1);
        tableCell.innerHTML = obj[i];
    }
});
```

We told it exactly what to expect. We told it to grab `bluth-table` and that we'd be looping through our `bluths` data. Now that our code looks like this:

```js
function tableMaker(id, data) {
    var tbody = document.getElementById(id)

    data.forEach(function(obj) { 
        var tableRow = tbody.insertRow(-1);
        for(i in obj){
            var tableCell = tableRow.insertCell(-1);
            tableCell.innerHTML = obj[i];
        }
    });
}
```
We've swapped our `bluths` and `bluth-table` for more generic `id` and `data` parameters that we can change later when we call the function.

For the most part, the rest of this code block looks a lot like we just walked through when we built our first table. The only things that changed were the ID we target and the data we cycle through. See? Not so bad!

Last thing, we have to call our function! In order for functions to happen, something has to tell it to run which is what we do at the bottom of our `main.js` file with:

```js
tableMaker('bluth-table', bluths);
tableMaker('plant-table', plants);
```
Here, we tell our tableMaker to run and to fill in those `id` and `data` parameters with the ID we want to target and the data we want to use. 

One weird thing to note, you'll see that `bluth-table` and `plant-table` are wrapped in quotes. That's because they're strings, meaning they're just words we're looking for. `bluths` and `plants` are not wrapped in quotes because they're variables. They represent the big chunk of JSON we grabbed earlier.

### We did it!

We did a ton in this class. If you feel overwhelmed, that's totally okay. Here are some of the things we went over:

- What is JavaScript?
- The DOM
- The web console
- Arrays
- Variables
- JSON
- Objects
- For loops
- console.log()
- Functions

These are the fundamentals of JavaScript, and now that you have a little familiarity with them- you're ready to start adding on to your programming toolkit.

### Notes

- [Intro to JavaScript and jQuery from NICAR 2016](https://github.com/scottpham/JS2WorkshopNICAR2016)
- [w3schools intro to JavaScript](https://www.w3schools.com/js/js_intro.asp)
- [Mozilla's intro to JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [Another JavaScript tutorial](https://www.tutorialspoint.com/javascript/index.htm)
- [More about for loops](https://www.w3schools.com/js/js_loop_for.asp)