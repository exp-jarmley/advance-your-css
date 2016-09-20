/**
 * JS action here
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
        appendTo : '.postcard-section--back',
        labelText : 'Flip to front!'
      }
    ]
  );
}