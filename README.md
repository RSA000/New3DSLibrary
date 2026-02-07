Online Library for 3DS
----------------------------------

## Richard Sullivan Andison

- A beta of the site can be found [here](https://rsa000.github.io/3DSLibrary/index.html)

### Example of an optimized website for nintendo 3DS :

 - Dual screen compatibility
 - D-Pad (left control pad) navigation.
 - Touchless navigation:
    * A - Select.
    * B - Navigate to previous page.
    * Left/Right Triggers - Navigate to previous/next page. (On reading page). 
    * D-pad - Select elements.

#### JavaScript Uses.

 - Overide default button functions.
 - Use scrollTo() to prevent the user from scrolling
    - No screen "shaking" (occurs from attempting to scroll window and being
      refocused by the center function continuously). from D-Pad.
      navigating with D-pad (left, right, up and down).
    - Screen shaking still occurs from left joystick.
 - Used for updating menu headers and subtitles when a link is focused.
 
#### CSS

 - Top screen is 400x215px
 - Bottom screen is 320x220px

#### More

This is a basic demo of the New 3DS library and builds on Simbas boilerplate/template repo.

#### Changes
    
    0.0.0
    * Updated README From original
    * Adjusted Resolutions slightly (400x220 -> 400x215) top screen.
    * Updated photos.
    * Updated JavaScript to display .jpg instead of .mpo.
        * NOTE - Should be capable of both.
            * I copy-pasted the code and changed it back to .mpo. This works, but is sloppy.
    * Updated lower menu to be a vertical scrollable menu instead of grid system.
    * Updated HTML meta to include "initial-scale=1". This ensures that the screen
      loads at the correct scale. 
    * Updated JavaScript to include comments. 
    * Added "Texts" files to store utf-8 formatted books from project 
      Gutenberg.org. An example text of 
      "Ten Days in the Madhouse"
      by Nelly Bly as a future sample text. 
    
    0.0.1
    
    * Updated README to include verbose control descriptions.
    * Included site design pdf to demos folder and placed early demos in their own seperate folder.
    
    0.0.2 
    
    * Updated README.
    * Updated and added comments to JavaScript code.
    * Tweaked CSS.
    * Updated HTML class names ("top" --> "upperScreen", "bottom" --> "lowerScreen")
    * Added new credit, wolfyxon.
    
    0.1.0
    
    * Home page is functioning, is centered, doesn't zoom, and the upper and lower screens have appropriate margins.
    * Most changes invloved general tweaking to the css and JavaScript format. 
    * The main menu selection scroll-menu elements each have an additional "description" 
      attribute the points to a 
      picture with the site description; 
      this is used to display a description of the currently selected menu option. Currently,
      only the library has a corresponding information sheet that simply
      says "Text" in the centre.
    
    0.2.0
    
    * Home menu was tweaked to have more exact proportions.
    * HTML adjusted so lower screen scrollable menu is nested in bottom div.
    * Redundant JavaScript was removed.
    * Cleaner CSS.
    * Scrollable menu functions completely.
    * Verbose commenting added to main menu HTML. 
    
    0.3.0
    
    * All main menu site links now navigate to a page except for the Bookmark option, which will be added later.
    * Site background image added. The new structure was designed to be updated and changed easily. 
    * Major tweaks to general CSS and HTML structure. This included nesting some dividers and elements,
    such as the upper screen text.
    * Javascript code implemented for displaying title and description of each menu link.
    * File structure updated according to GeeksforGeeks best practices tutorial.
    * Added new credits for art assets
    * CSS file for "about.html" is created for custom elements.
    
    0.3.1
    
    * Updated README; reduced line length of some entries and clarified some entries.
    
    0.3.2
    
    * Updated READ; removed redundant elements and reduced README entry line lengths again.
    
    0.4.0
    
    * Updated Javascript to change display depending of whether user accessed site via a desktop browser
      or 3DS system.
    * Updated HTML and CSS styles.
    
    0.5.0
    
    * Added functionality to contacts page form.
    * Added limited functionality to reading page.
      * Currently, 5000 words are buffered from text before they are inserted into a single paragraph.
      * Future updates will include finer granularity for formatting text when buffering and displaying.
        (For example, starting a new paragraph tag to fille when an empty line is parsed, detecting titles, etc...). 
    * Updated credits page.
    * Overall major changes where implementing Javascript functionalities to contacts and reading.
      * Note - adding a functioning, free, contact form was surprisingly easy.
      * Note - Formatting text was difficult, especially because I had to discover the 3DS browser 
               does not support fetch() through trial and error
               and required some digging into XMLHTTPRequests to
               accomodate this limitation. 
               
    0.6.0
    
    Overview of Update:
    
    * Full functionality for reading text.
    * Menu UI improvements.
    * Improved commenting and layout of code. 
    
    
    * Updated Javascript file structure: Common functionalities used across all pages are placed in
    "common.js." Similarly, the "read.js" provides functionalities specific to the "read.html" page,
    and the "menu.js" provides functionality for any menu-type pages; previous Javascript file have 
    been removed.
    
    * Javascript syntax and  has been significantly improved; several redundant elements and
    functions where removed, scoping problems addressed. Several sections were started from
    code snippets taken from wolfyxon's 3ds-web-stuff (labeled in comments) and required some research/trial and error to properly modify for this sites purposes. Some functionalities include:
            
            * A function for canceling default event actions that occur with button presses.
              * This was especially useful in stopping the screen from "shaking" where pressing the 
                D-Pad would attempt to scroll the screen if no elements could be focused on, causing a
                small amount of moving before being reset by the "center" function interval. 
            
            * A function for setting a different action when a button is pressed. 
            
            * A function for detecting if a user is accessing site from 3DS system. 
            
            * A function for adding a warning for non-3DS compatible site links (not implemented yet).
            
    * The functionality for the reading page has improved significantly with:
            
            * Better formatted text.
            
            * Better text size for each "page"
            
            * Ability to scroll via up and down D-Pad buttons.
            
            * Ability to change page with left and right D-Pad buttons.
            
    
    * NOTES - Things I learned about the 3DS browser at this stage:
      * The "let" keyword for block-scoped variables is not available on 3DS systems.
      * How callbacks in Javascript can be used for sequence control for ansynchronous events.
        (This was important for requesting a text file via XMLHTTPRequests.)
      * Scoping in Javascript.

      
    0.7.0
    
    Overview of update:
    
      * File structure changes. (including removing redundant files and folders from this repo due to bad merging practices)
      * Cookie implmentations for current book page saving and theme setting.
      * Added books and images (mostly from Canadian Project Gutenberg).
      * Added additional credits.
      * Themes implemented and added (themes can now be changed in settings).
      * Improved formatting for reading (using .html files instead of .txt), photos are now available for texts.
      * CSV file system implemented for populating book catalogue.
      * general improvements to HTML, CSS and Javascript.
    
    At this point I see myself only needing to implement a few tweaks before the site is fully functioning:
      
      * Heading and subtitle tweaks (place-holders, empty scenarios)
      * Make theme buttons selectable via d-pad on 3DS.
      * Arrange CSV by alphabetical order and add better descriptions/titles.
      * Add a table (potentially a credits table for specific Pixabay contributers).
      
    0.7.1
    
    Overview of update:
    
      * Updated commenting for all Javascript files.
      * Added unit 4 Javascript proposal pdf.
      * Removed some literature and left one example book (all books are
        still available on testing site).
      

----

#### Credits
 - [wolfyxon.github.io/3ds-web-stuff/](https://wolfyxon.github.io/3ds-web-stuff/) Provided several 
   functionalities for site and helped in understanding 3DS webprogramming quirks in general.
 - [simbas.github.com/n3dsite](http://simbas.github.com/n3dsite) This entire project was started by cloning this repo.
 - [3dbrew](https://www.3dbrew.org/wiki/Internet_Browser) for information about 3ds browser.
 - [GeeksforGeeks](https://www.geeksforgeeks.org/javascript/file-and-folder-organization-best-practices-for-web-development/) This provided a tutorial for structuring the site files.
 - [Project Gutenberg](https://gutenberg.org/) - For providing literature.
 - [Resource for starry background gif](https://pixabay.com/gifs/star-night-night-sky-dark-4773/) - Used for site backgrounds.
 - [Resource for candle gif](https://pixabay.com/gifs/candle-burning-warm-pixel-flame-17634/) - Used for homescreen decoration.
