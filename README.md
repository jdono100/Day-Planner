# Week-05-Day-Planner


## App Description

Using this scheduler, a user can input their daily plans into time blocks that are color coded depending on what time of day it is (using moment.js!). Even after refreshing the page, the input in the text blocks will stay there.


## How I Made It

I started by making the date/time in the jumbotron display correctly. I then thought the best plan of action would be to have the time block generation be in the JavaScript code, but then moved it all directly into the HTML once I realized it would be hard to directly edit the elements without having incredibly long lines/blocks of JS code.

Next I made formatting changes to the planner's Bootstrap classes and the style.css page, before starting to write the JavaScript for the time-blocks changing color and saving into local storage. Originally it didn't work the way that I wrote it, however, and was trying many things to try and figure out how to get it to work, including moving blocks around the JavaScript code and putting everything in a '$(document).ready()' function, but none of that worked.

It turns out, you can't use arrow function notation inside jQuery '.on()' or '.each()' event handlers--though I'm sure that most jQuery operations won't work correctly with arrow notation. I've gotten used to writing functions in that style--to me it makes for clearer code that can be easier to read--but once I changed it to normal function syntax, it ended up working marvelously. It ended up being nice not using for loops in the JavaScript code, which I forsure thought I would have to use but jQuery makes that redundant in this exercise.

