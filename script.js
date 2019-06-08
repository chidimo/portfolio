$(document).ready(() => {
    // Add smooth scrolling to all links with class smooth-scroll
    $(".smooth_scroll").on('click', function(e) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();
            const hash = this.hash; // Store hash
            console.log('hash ', hash)

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
                { scrollTop: $(hash).offset().top }, 800, () => {
            // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
      } // End if
    });
});
