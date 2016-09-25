/**
 * CardFlip
 * 
 * ## Goals
 * 1. Create buttons to toggle a class on the postcard so it can 
 *    be flipped via CSS
 * 2. Add an additional flipWrapper element that facilitates the flipping
 * 
 */

/**
 * Flipper
 * Constructor
 * 
 * @param  {string} parent:
 * Parent postcard element as a CSS selector-style string 
 * 
 * @param  {array} triggersArr:
 * An array of objects containing where flip buttons 
 * should be appended and what labels they should have
 */
function flipper(parent,triggersArr) {
  
  // Define that as this, 
  // and create global vars attached to the constructor
  var that = this;    
  that.parent = document.querySelector(parent);
  that.isActive = false;
  that.activeClass = 'is--flipped';
  that.triggerClass = 'postcard-fliptrigger';
  that.wrapperClass = 'postcard-flipper';
  that.wrapperCreated = false;

  // Create buttons
  for(var i=0;i<triggersArr.length;i++) {
    that.createButton(triggersArr[i]);
  }

}

/**
 * createButton
 * Create the flip buttons
 * 
 * @param  {object} triggerObj:
 * Indivdual button object from the triggersArr
 */
flipper.prototype.createButton = function(triggerObj) {
  
  var that = this,
      elem = document.createElement('button'),
      triggerClass = that.triggerClass,
      wrapperCreated = that.wrapperCreated;
  
  // Add properties to the button element
  elem.className = triggerClass;
  elem.innerHTML = triggerObj.labelText;

  // Append to dom
  document.querySelector(triggerObj.appendTo).appendChild(elem);

  // Add click listener
  document.addEventListener('click', function() {
    that.doFlip(elem);
  });

  // Once buttons are in the dom, create the flipWrapper 
  // if wrapperCreated isn't true
  if (!wrapperCreated) {
    that.createFlipWrapper();
  }

};

/**
 * createFlipWrapper
 * Append a wrapper element as the first child of the
 * parent element to facilitate flipping
 */
flipper.prototype.createFlipWrapper = function() {
  var that = this,
      parent = that.parent,
      elem = document.createElement('div'),
      wrapperClass = that.wrapperClass,
      wrapperCreated = that.wrapperCreated,
      existingParentMarkup = parent.innerHTML,
      newParentMarkup = '';

  // Create new markup for postcard that includes
  // the flipWrapper
  newParentMarkup += '<div class="' + wrapperClass + '"/>';
  newParentMarkup += existingParentMarkup;
  newParentMarkup += '</div>'

  // Append back to dom
  parent.innerHTML = newParentMarkup;

  // Set appended to true to prevent wrapper
  // being added more than once
  if (!wrapperCreated) {
    that.wrapperCreated = true;
  }

}

/**
 * doFlip
 * Trigger the flip class on the parent element
 * 
 * @param  {object} elem:
 * Button dom node created via the createButton method
 */
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