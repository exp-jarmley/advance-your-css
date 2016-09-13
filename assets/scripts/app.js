/**
 * Simple script to toggle a class
 * for the card flip
 */

(function(){

  var parent = document.querySelector('.postcard'),
      trigger = document.querySelector('.postcard-readbutton'),
      isActive,
      activeClass = 'is--flipped';

  trigger.addEventListener('click', function(){

    isActive = parent.className.indexOf(activeClass);

    if (isActive === -1) {
      parent.classList.add(activeClass);
    } else {
      parent.classList.remove(activeClass);
    }

  });

})();