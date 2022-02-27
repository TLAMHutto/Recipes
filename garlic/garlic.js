function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  const floating_btn = document.querySelector('.floating-btn');
  const close_btn = document.querySelector('.close-btn');
  const social_panel_container = document.querySelector('.social-panel-container');
  
  floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
  });
  
  close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
  });