// JavaScript to handle click events
  document.getElementById("image-container").addEventListener("click", function() {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
    // Simulate loading for demonstration purposes
    setTimeout(function() {
      document.getElementById("loading").style.display = "none";
    }, 1500); // Adjust the duration as needed
  });

  document.getElementById("play-button").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the image container
	this.style.display = "none"; // Hide the play button
    document.getElementById("loading").style.display = "block"; // Show the loading element

    
    // Simulate loading for demonstration purposes
    setTimeout(function() {
      document.getElementById("loading").style.display = "none";
    }, 1500); // Adjust the duration as needed
  });
  
  // Function to show modal after 2 seconds
  function showModal() {
    setTimeout(function() {
      document.getElementById('myModal').style.display = 'flex';
	  document.getElementById("play-button").style.display = "block";
    }, 1500); // 2000 milliseconds = 2 seconds

    // Add event listener to close modal when clicking outside of it
    window.addEventListener('click', closeModalOutside);
  }
  
  function closeModal() {
    setTimeout(function() {
      document.getElementById('myModal').style.display = 'none';
    });
  }

  // Function to close modal if clicked outside of it
  function closeModalOutside(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
      window.removeEventListener('click', closeModalOutside);
    }
  }