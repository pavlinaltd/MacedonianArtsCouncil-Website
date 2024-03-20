window.addEventListener("mousemove", debounce(scroll));

function scroll(event) {
   var checkbox = document.getElementById("zoomable-image-checkbox");

   if (!checkbox || !checkbox.checked) {
      return;
   }

   var y = event.clientY;
   var x = event.clientX;

   var viewportWidth = document.documentElement.clientWidth;
   var viewportHeight = document.documentElement.clientHeight;
   var yPercentage = (y / viewportHeight) * (viewportHeight / 4);
   var xPercentage = (x / viewportWidth) * (viewportWidth / 4);

   window.scrollTo(xPercentage, yPercentage);
}

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}
window.addEventListener("mousemove", debounce(scroll));

function scroll(event) {
   var checkbox = document.getElementById("zoomable-image-checkbox2");

   if (!checkbox || !checkbox.checked) {
      return;
   }

   var y = event.clientY;
   var x = event.clientX;

   var viewportWidth = document.documentElement.clientWidth;
   var viewportHeight = document.documentElement.clientHeight;
   var yPercentage = (y / viewportHeight) * (viewportHeight / 4);
   var xPercentage = (x / viewportWidth) * (viewportWidth / 4);

   window.scrollTo(xPercentage, yPercentage);
}

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}
window.addEventListener("mousemove", debounce(scroll));



function scroll(event) {
   var checkbox = document.getElementById("zoomable-image-checkbox3");

   if (!checkbox || !checkbox.checked) {
      return;
   }

   var y = event.clientY;
   var x = event.clientX;

   var viewportWidth = document.documentElement.clientWidth;
   var viewportHeight = document.documentElement.clientHeight;
   var yPercentage = (y / viewportHeight) * (viewportHeight / 4);
   var xPercentage = (x / viewportWidth) * (viewportWidth / 4);

   window.scrollTo(xPercentage, yPercentage);
}

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}





