// * || Tab Feature arrow function Implimentation.
let openTabContent = (event, sidebarButtonId) => {

  // *|| display none for every content in the tab
  let tabContent = document.querySelectorAll(".tab--content__container");
  for(let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // *|| replace classname sidebar--active to empty for button (background-color property)
  let tabLinks = document.querySelectorAll('.sidebar--button');
  for(let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" sidebar--active", "");
  }

  // *|| set display block for selected button 
  // *|| add sidebar--active classname to selected button
  document.getElementById(sidebarButtonId).style.display = 'block';
  event.currentTarget.className += " sidebar--active";
}

// *|| defaultOpen id button will be automatically clicked at beginning (Working Hours & Date Button)
document.querySelector('#defaultOpen').click();