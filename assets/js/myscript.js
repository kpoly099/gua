var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
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
}

/*
     FILE ARCHIVED ON 16:36:04 Jul 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:21:51 Jun 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.84
  load_resource: 483.462 (2)
  PetaboxLoader3.resolve: 395.467 (2)
  PetaboxLoader3.datanode: 57.103 (2)
*/