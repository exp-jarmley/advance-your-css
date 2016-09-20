/**
 * Simple script to toggle a class
 * for the card flip
 */

function flipper(parent,triggersArr) {
  
  var that = this;    

      that.parent = document.querySelector(parent);
      that.isActive = false;
      that.activeClass = 'is--flipped';
      that.triggerClass = 'postcard-fliptrigger';

  // Create buttons
  for(var i=0;i<triggersArr.length;i++) {
    that.createButton(triggersArr[i]);
  }
}

flipper.prototype.createButton = function(triggerObj) {
  
  var that = this,
      elem = document.createElement('button')
      triggerClass = that.triggerClass;
  
  // Add properties to the button element
  elem.className = triggerClass;
  elem.innerHTML = triggerObj.labelText;

  // Append to dom
  document.querySelector(triggerObj.appendTo).appendChild(elem);

  // Add click listener
  document.addEventListener('click', function() {
    that.doFlip(elem);
  });
};

flipper.prototype.doFlip = function(elem) {

  var that = this,
      activeClass = that.activeClass,
      isActive = that.isActive,
      parent = that.parent;

  that.isActive = that.parent.className.indexOf(activeClass);
  if (isActive === -1) {
    parent.classList.add(activeClass);
  } else {
    parent.classList.remove(activeClass);
  }

};