/**
 * Simple script to toggle a class
 * for the card flip
 */

(function(){

  var parent = document.querySelector('.postcard'),
      trigger = document.getElementsByClassName('postcard-readbutton'),
      isActive,
      activeClass = 'is--flipped',
      i = 0,
      doFlip = function() {
        isActive = parent.className.indexOf(activeClass);
        if (isActive === -1) {
          parent.classList.add(activeClass);
        } else {
          parent.classList.remove(activeClass);
        }
      };

  for(i;i<trigger.length;i++) {
    trigger[i].addEventListener('click', doFlip );
  }

})();