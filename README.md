Online Library for 3DS
----------------------------------

## Richard Sullivan Andison

### Example of an optimized website for nintendo 3DS :

 - Dual screen
 - D-Pad
 - Touchless navigation
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
----

#### Credits
 - [simbas.github.com/n3dsite](http://simbas.github.com/n3dsite) This entire project was started by cloning this repo.
 - [3dbrew](https://www.3dbrew.org/wiki/Internet_Browser) for information about 3ds browser
 - [Project Gutenberg](https://gutenberg.org/)
