
// *? Task: Remove items from a dropdown list

// Solution 1
const  removeColor = () => {
  const delItem = document.querySelector("#colorSelect");
  delItem.remove(delItem.selectedIndex);
}




// ! Explanation: Used arrow function. Searched item by selector-id. Apply remove and selectedIndex.
// HTMLSelectElement.selectedIndex показывает порядковый номер первого выбранного элемента <option>. Значение -1 означает, что ни один из элементов не выбран.