/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            //expect all feeds to be defined
            expect(allFeeds).toBeDefined();
            //expect the length of allfeeds to not be 0
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('url are defined in all array objects', function() {
          //loop throgh array
          for(i=0; i<allFeeds.length; i++) {
            //expect the url to be defined
            expect(allFeeds[i].url).toBeDefined();
            //expect allfeeds url to not be an empty string
            expect(allFeeds[i].url).not.toBe('');
          }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are defined in all array objects', function() {
           for(i=0; i<allFeeds.length; i++) {
             //expect the name to be defined
             expect(allFeeds[i].name).toBeDefined();
             //expect the name to not be an empty string
             expect(allFeeds[i].name).not.toBe('');
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('Menu element is initially hidden', function() {
           //expect the body to have a class of menuhidden
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Does menu change when clicked', function() {
            //init button and body
            button = $('.menu-icon-link');
            body = $('body');

            button.click();
            //after click, expect the body to not have menuhidden
            expect(body.hasClass('menu-hidden')).toBe(false);

            button.click();
            //after another click expect the body to have the menuhidden
            expect(body.hasClass('menu-hidden')).toBe(true);


          });

        });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      beforeEach(function(done) {
        //before each it, execute loadfeed with the [0] array and done callback
        loadFeed(0, done);
      });

      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       it('at least 1 entry in the .entry element', function(done) {

         //expect the length of entry to be larger than 0

         expect($('.entry').length).toBeGreaterThan(0);
         //done() for the asynchronous test
         done();

       });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

      //init oldentry

      var oldentry;

      beforeEach(function(done) {
        //before each it, load feed array 2, and before that, store oldfeed html
        oldentry = $('.feed').html();
        loadFeed(2, done);
      });
      //init newentry

      var newentry;


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('when a new feed is loaded, the content changes', function() {
           //newentry is the html from the beforeeach loadfeed 2
           newentry = $('.feed').html();
           //expect oldentry to be different than newentry
           expect(oldentry).not.toBe(newentry);
         });
       });
}());
