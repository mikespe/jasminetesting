# Summary

Final FEND Project 6, I edited and created the tests for feedreader.js

# tests

test the underlying business logic of the application as well as the event handling and DOM manipulation.

# How to run

1. Download zip onto your pc
2. Extract all to any directory
3. Open index.html into your browser

# Tasks

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

4. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

5. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

6. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


# TechStack Used

1. html
2. CSS
3. JavaScript
4. JasmineJS
5. Handlebars

# Obstacles

Async requests were tricky to test for.
