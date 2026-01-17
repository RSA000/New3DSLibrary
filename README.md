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
    * Left/Right Triggers - Navigate to previous/next page.
    * C-stick - Scroll.
    * Left stick - Scroll.
    * D-pad - Select elements.
 - 3D images

#### JavaScript

 - Vanilla JS
 - Based on focus/blur events
 - Use scrollTo() to prevent the user from scrolling
 - Selecting anchors via the CSS3 selector **a[href$='.mpo']**

#### CSS

 - Top screen is 400x215px
 - Bottom screen is 320x220px
 - Use **background** property to preview the 3D images

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
    * Updated HTML meta to include "initial-scale=1". This ensures that the screen loads at the correct scale. 
    * Updated JavaScript to include comments. 
    * Added "Texts" files to store utf-8 formatted books from project Gutenberg.org. An example text of "Ten Days in the Madhouse" by Nelly Bly as a future sample text. 
    
    0.0.1
    
    * Updated README to include verbose control descriptions.
    * Included site design pdf to demos folder and placed early demos in their own seperate folder.
    
    0.0.2 
    
    * Lost track of updating update notes, but changes can also be tracked via commit comments.
    * Update README to reflect new changes (link to beta (or I guess pre-alpha?) version of the website).
    * Updated and added comments to JavaScript code.
    * Tweaked CSS.
    * Updated HTML class names ("top" --> "upperScreen", "bottom" --> "lowerScreen")
    * Added new credit, wolfyxon.
    
    0.1.0
    
    * Home page is functioning, is centered, doesn't zoom, and the upper and lower screens have appropriate margins.
    * Most changes where general tweaking to the css and JavaScript format. 
    * The main menu selection scroll-menu elements each have an additional "description" attribute the points to a picture with the site description; this is used to display a description of the currently selected menu option. Currently, only the library has a corresponding information sheet that simply says "Text" in the centre.
    
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
    * Major tweaks to general CSS and HTML structure. This included nesting some dividers and elements, such as the upper screen text.
    * Javascript code implemented for displaying title and description of each menu link.
    * File structure updated according to GeeksforGeeks best practices tutorial.
    
     

----

#### Credits
 - [wolfyxon.github.io/3ds-web-stuff/](https://wolfyxon.github.io/3ds-web-stuff/) I haven't explored this repo much, but I love the site
 design and intend to explore it further. This resource is what informed me to hosting sites via GitHub.
 - [simbas.github.com/n3dsite](http://simbas.github.com/n3dsite) This entire project was started by cloning this repo.
 - [3dbrew](https://www.3dbrew.org/wiki/Internet_Browser) for information about 3ds browser
 - [GeeksforGeeks](https://www.geeksforgeeks.org/javascript/file-and-folder-organization-best-practices-for-web-development/) This provided a tutorial for structuring the site files.
 - [Project Gutenberg](https://gutenberg.org/) - I acquired the "nelly_bly.txt" test text from the site. 
 - [Resource for starry background gif](https://pixabay.com/gifs/star-night-night-sky-dark-4773/) - Used for site background
 - [Resource for candle gif](https://pixabay.com/gifs/candle-burning-warm-pixel-flame-17634/) - Used for general decoration
