function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

// Function to toggle the visibility of the dropdown content
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdownContent = document.getElementById("dropdownContent");
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  };
  
  function clearDefaultText() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.value === "Search...") {
      searchBar.value = "";
    }
  }
  
  function restoreDefaultText() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.value === "") {
      searchBar.value = "Search...";
    }
  }