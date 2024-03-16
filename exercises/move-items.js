/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll('.item');
console.log(allItems);



/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.getElementById('main');
console.log(main);



/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById('favs');
console.log(favs)



/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here
const mainHeart = "fa-heart-circle-plus";
const favHeart = "fa-heart-crack";

const updateCollections = (id, direction) => {
  let elm = document.getElementById(id);
      if(direction === "toFavs") {
          favs.appendChild(elm);
          parentElm = elm.parentElement;
          let iconToChange = elm.querySelector(".fa-solid.fa-heart-circle-plus");
          iconToChange.classList.remove(mainHeart);
          iconToChange.classList.add(favHeart);
      } else if(direction === "toMain") {
          main.appendChild(elm);
          parentElm = elm.parentElement;
          let iconToChange = elm.querySelector(".fa-solid.fa-heart-crack");
          iconToChange.classList.remove(favHeart);
          iconToChange.classList.add(mainHeart);
      }
  }



/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...
for(let elm of allItems) {
  elm.addEventListener("click", function () {
      let parentElmID = elm.parentElement.id;
      let direction = "";
      if(parentElmID === "main") {
          direction = "toFavs";
      }else{
          direction = "toMain";
      }
      updateCollections(elm.id, direction);
  })

}