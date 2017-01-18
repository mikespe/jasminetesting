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

        it('url are defined in all array objects', function() {
          //loop throgh array
          for(i=0; i<allFeeds.length; i++) {
            //expect the url to be defined
            expect(allFeeds[i].url).toBeDefined();
            //expect allfeeds url to not be an empty string
            expect(allFeeds[i].url).not.toBe('');
          }
        });

         it('Names are defined in all array objects', function() {
           for(i=0; i<allFeeds.length; i++) {
             //expect the name to be defined
             expect(allFeeds[i].name).toBeDefined();
             //expect the name to not be an empty string
             expect(allFeeds[i].name).not.toBe('');
           }
         });
    });


    describe('The menu', function() {

         it('Menu element is initially hidden', function() {
           //expect the body to have a class of menuhidden
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

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

    describe('Initial Entries', function() {

      beforeEach(function(done) {
        //before each it, execute loadfeed with the [0] array and done callback
        loadFeed(0, done);
      });

       it('at least 1 entry in the .entry element', function(done) {

         //expect the length of entry to be larger than 0

         expect($('.entry').length).toBeGreaterThan(0);
         //done() for the asynchronous test
         done();

       });

    });

    describe('New Feed Selection', function() {

      //init oldentry

      var oldentry;
      var newentry;

      beforeEach(function(done){
          loadFeed(0, function(){
              oldentry = $('.feed').html();
              loadFeed(1, function(){
                  newentry = $('.feed').html();
                  done();
              });
          });
      });

         it('when a new feed is loaded, the content changes', function() {
           //newentry is the html from the beforeeach loadfeed 2
           newentry = $('.feed').html();
           //expect oldentry to be different than newentry
           expect(oldentry).not.toBe(newentry);
         });
       });
}());
