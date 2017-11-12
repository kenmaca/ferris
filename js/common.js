
/* Adds the class cls to each of the selectors target.

   @param cls - The class to add.
   @param target - A list of selectors or single selector.
*/
function addClass(cls, target) {
  for (let element of document.querySelectorAll(target)) {
    element.classList.add(cls);
  }
}

/* Removes the classes from the list cls from each of the selectors target.

   @param cls - The list of classes to remove.
   @param target - A list of selectors or single selector.
*/
function removeClass(cls_list, target) {
  for (let element of document.querySelectorAll(target)) {
    for (let cls of cls_list) {
      element.classList.remove(cls);
    }
  }
}
