/**
 * app.js
 * @author: Jack Armley
 * @version : 1.0
 */

/**
 * If browser supports the transform : translate3d(); css
 * property, then commence flipping!
 */
if (Modernizr.csstransforms3d) {
  var initFlip = new flipper(
    '.postcard',
    [
      {
        appendTo : '.postcard-section-headergroup',
        labelText : 'Flip to back!'
      },
      {
        appendTo : '.postcard-section--message',
        labelText : 'Flip to front!'
      }
    ]
  );
}